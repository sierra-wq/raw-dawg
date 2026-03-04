"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { signup as signupApi, login as loginApi, logout as logoutApi, getCustomer, updateCustomer as updateCustomerApi, updateCustomerAddress as updateCustomerAddressApi, createCustomerAddress as createCustomerAddressApi, attachCustomerToCart, MailingAddressInput, UpdateInput, resetCustomerPassword, resetPasswordByUrlApi } from "@/store/authStore";
import { useRouter } from "next/navigation";

type Customer = { id: string; email: string; firstName?: string; lastName?: string, phone?: string, acceptsMarketing?: boolean, cartId?: string, address?: MailingAddressInput } | null;

export type AuthContextType = {
  customer: Customer;
  authenticated: boolean;
  authloading: boolean;
  subscribeLoading: boolean;
  subscribeSuccess: boolean;
  handleSubscribe: (email: string) => Promise<{ ok: boolean; message: string; errors?: any }>;
  signup: (data: { email: string; password: string; firstName?: string; lastName?: string; cartId?: string }) => Promise<{ ok: boolean; errors?: any }>;
  login: (data: { email: string; password: string; cartId?: string }) => Promise<{ ok: boolean; errors?: any }>;
  logout: () => Promise<void>;
  resetPassword: (email: string) => Promise<{ ok: boolean; errors?: any }>;
  resetPasswordByUrl: (newPassword: string, resetUrl: string) => Promise<{ ok: boolean; errors?: any }>;
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
  const [authenticated, setAuthenticated] = useState(false);
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [authloading, setAuthLoading] = useState(true);
  const [subscribeLoading, setSubscribeLoading] = useState(false);
  const [subscribeSuccess, setSubscribeSuccess] = useState(false);

  const router = useRouter();


  useEffect(() => {
    let mounted = true;

    (async () => {
      try {
        const res = await fetch("/api/auth/me", { cache: "no-store" });
        const data = await res.json();
        if (!mounted) return;

        setAuthenticated(!!data.authenticated);
        setCustomer(data.customer ?? null);
      } finally {
        if (mounted) setAuthLoading(false);
      }
    })();

    return () => {
      mounted = false;
    };
  }, []);



  async function handleSubscribe(email: string) {
      setSubscribeLoading(true);

      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          source: "landing-hero",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) return { ok: false, message: data.message, errors: data.errors };
      
      setSubscribeSuccess(true);
      setSubscribeLoading(false);
      return { ok: true, message: data.message };      
  }



  async function signup({ email, password, firstName, lastName, cartId }: { email: string; password: string; firstName?: string; lastName?: string; cartId?: string }) {
    // keep your existing flow: signup then login
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, firstName, lastName, cartId }),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors };
    setAuthenticated(true);
    setCustomer(data.customer ?? null);
    router.push("/profile");

    return { ok: true };
  }

  async function login({ email, password, cartId }: { email: string; password: string; cartId?: string }) {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password, cartId }),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors };

    setAuthenticated(true);
    setCustomer(data.customer ?? null);
    return { ok: true };
  }

  async function logout() {

    await fetch("/api/auth/logout", { method: "POST" });
    setAuthenticated(false);
    setCustomer(null);
    router.push("/");

  }

  async function customerUpdate(customerUpdateInput: UpdateInput) {
    const res = await fetch("/api/customer/update", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(customerUpdateInput),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors };

    setCustomer(data.customer ?? null);
    return { ok: true };
  }

  async function updateAddress(address: MailingAddressInput) {
    const res = await fetch("/api/customer/address", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(address),
    });

    const data = await res.json();
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors };

    setCustomer(data.customer ?? null);
    return { ok: true };
  }


  async function resetPassword(email: string) {
    const res = await fetch("/api/auth/reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors };
    return { ok: true };
  }

  async function resetPasswordByUrl(newPassword: string, resetUrl: string) {
    const res = await fetch("/api/auth/reset-by-url", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ newPassword, resetUrl }),
    });
    const data = await res.json();
    if (!res.ok || !data.ok) return { ok: false, errors: data.errors };
    return { ok: true };
  }

  return (
    <AuthContext.Provider value={{ customer, authenticated, authloading, subscribeLoading, subscribeSuccess, handleSubscribe, signup, login, logout, customerUpdate, updateAddress, resetPassword, resetPasswordByUrl }}>
      {children}
    </AuthContext.Provider>
  );
}
