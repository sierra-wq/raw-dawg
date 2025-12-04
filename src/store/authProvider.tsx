// src/context/AuthContext.tsx
"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { signup as signupApi, login as loginApi, logout as logoutApi, getCustomer, updateCustomer as updateCustomerApi, updateCustomerAddress as updateCustomerAddressApi, createCustomerAddress as createCustomerAddressApi, attachCustomerToCart, MailingAddressInput, UpdateInput } from "@/store/authStore";
import { useRouter } from "next/navigation";

type Customer = { id: string; email: string; firstName?: string; lastName?: string , phone?: string, acceptsMarketing?: boolean, cartId?: string, address?: MailingAddressInput } | null;

export type AuthContextType = {
  customer: Customer;
  token: string | null;
  loading: boolean;
  signup: (data: { email: string; password: string; firstName?: string; lastName?: string; cartId?: string }) => Promise<{ ok: boolean; errors?: any }>;
  login: (data: { email: string; password: string; cartId?: string }) => Promise<{ ok: boolean; errors?: any }>;
  logout: () => Promise<void>;
  customerUpdate: (data: UpdateInput) => Promise<{ ok: boolean; errors?: any }>;
  updateAddress: (data: MailingAddressInput) => Promise<{ ok: boolean; errors?: any }>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("shopify_customer_token");
  });
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // hydrate customer from token
  useEffect(() => {
    let mounted = true;
    async function hydrate() {
      if (!token) {
        setCustomer(null);
        setLoading(false);
        return;
      }
      try {
        const c = await getCustomer(token);
        console.log("customer", c);
        if (mounted) {
          setCustomer(c);
        }
      } catch (err) {
        console.error("failed to get customer", err);
        setCustomer(null);
        setToken(null);
        localStorage.removeItem("shopify_customer_token");
      } finally {
        if (mounted) setLoading(false);
      }
    }
    hydrate();
    return () => {
      mounted = false;
    };
  }, [token]);

  async function signup({ email, password, firstName, lastName, cartId }: { email: string; password: string; firstName?: string; lastName?: string; cartId?: string }) {
    const { customerCreate } = await signupApi({
      email,
      password,
      firstName,
      lastName,
    });
    if (customerCreate.userErrors && customerCreate.userErrors.length) {
      return { ok: false, errors: customerCreate.userErrors };
    }
    console.log(" signup waS COMPLETED  ", customerCreate.customer);
    // auto-login after signup
    const { customerAccessTokenCreate } = await loginApi(email, password);
    if (customerAccessTokenCreate.userErrors && customerAccessTokenCreate.userErrors.length) {
      return { ok: false, errors: customerAccessTokenCreate.userErrors };
    }
    const tokenValue = customerAccessTokenCreate.customerAccessToken.accessToken;
    setToken(tokenValue);
    localStorage.setItem("shopify_customer_token", tokenValue);

    // attach cart to customer if cartId provided
    if (cartId) {
      try {
        await attachCustomerToCart(cartId, tokenValue);
      } catch (err) {
        console.warn("failed to attach cart", err);
      }
    }

    const c = await getCustomer(tokenValue);
    setCustomer(c);

    return { ok: true };
  }

  async function login({ email, password, cartId }: { email: string; password: string; cartId?: string }) {
    const { customerAccessTokenCreate } = await loginApi(email, password);
    if (customerAccessTokenCreate.userErrors && customerAccessTokenCreate.userErrors.length) {
      return { ok: false, errors: customerAccessTokenCreate.userErrors };
    }
    const tokenValue = customerAccessTokenCreate.customerAccessToken.accessToken;
    setToken(tokenValue);
    localStorage.setItem("shopify_customer_token", tokenValue);

    // attach cart to customer if cartId provided
    if (cartId) {
      try {
        await attachCustomerToCart(cartId, tokenValue);
      } catch (err) {
        console.warn("failed to attach cart", err);
      }
    }
    const c = await getCustomer(tokenValue);
    setCustomer(c);
    router.push("/profile");
    return { ok: true };
  }

  async function logout() {
    if (!token) return;
    try {
      await logoutApi(token);
    } catch (err) {
      // still clear local token
      console.warn("logout request failed", err);
    } finally {
      setToken(null);
      setCustomer(null);
      localStorage.removeItem("shopify_customer_token");
      router.push("/");
    }
  }

  async function customerUpdate(customer : UpdateInput)
  {
    const {customerUpdate} = await updateCustomerApi(token as string, customer);
    if (customerUpdate.customerUserErrors && customerUpdate.customerUserErrors.length) {
      return { ok: false, errors: customerUpdate.userErrors };
    }
    const c = await getCustomer(token as string);
    setCustomer(c);
    return { ok: true };
  }

  async function updateAddress(address : MailingAddressInput)
  {
    console.log("the address " , customer?.address);
    const {customerUpdate} =  await ( customer?.address?.address1 === undefined || customer?.address?.address1 === "" ? createCustomerAddressApi(token as string, address) : updateCustomerAddressApi(token as string, customer?.id as string ,address));
    if (customerUpdate.userErrors && customerUpdate.userErrors.length) {
      return { ok: false, errors: customerUpdate.userErrors };
    }
    const c = await getCustomer(token as string);
    setCustomer(c);
    return { ok: true };
  }

  return (
    <AuthContext.Provider value={{ customer, token, loading, signup, login, logout, customerUpdate,  updateAddress }}>
      {children}
    </AuthContext.Provider>
  );
}
