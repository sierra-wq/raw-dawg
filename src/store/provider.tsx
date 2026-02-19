"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartStore, CartType } from "@/store/store";

interface CartContextType {
  cart: CartType | null;
  loading: boolean;
  viewCart: (cartId?: string) => Promise<void>;
  addItem: (variantId: string, qty?: number, sellingPlanId?: string) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
  updateItem: (lineId: string, quantity: number) => Promise<void>;
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const CartContext = createContext<CartContextType | null>(null);

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider/>");
  return ctx;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartType | null>(null);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  // Load cart from localStorage
  useEffect(() => {
    const existing = localStorage.getItem("rawdawg_cart");
    if (existing) 
      {
        setCart(JSON.parse(existing));
      }
    setLoading(false);
  }, []);

  // Persist cart
  useEffect(() => {
    if (cart) localStorage.setItem("rawdawg_cart", JSON.stringify(cart));
  }, [cart]);

  // METHODS ------------------------------
  
  async function viewCart(cartId?: string) {
    let newCart = cart;
    if (!newCart) newCart = await CartStore.createCart();

    const cartretrived = await CartStore.GetCart(newCart.id);
    setCart(cartretrived);
  }
  async function addItem(variantId: string, qty = 1, sellingPlanId?: string) {

    console.log("Adding item to cart: " , {variantId, qty, sellingPlanId});
    let newCart = cart;
    if (!newCart) newCart = await CartStore.createCart();

    const updated = await CartStore.addLine(newCart.id, variantId, qty, sellingPlanId);
    console.log("logging updated cart  " ,updated);
    console.log("logging updated cart lines  " ,updated.lines[0].sellingPlanId?.priceAdjustments);
    console.log("logging updated cart lines  " ,updated.lines[0].price);
    console.log("logging updated cart lines  " ,updated.lines[0].quantity);
    
    console.log((updated.lines[0].price * (updated.lines[0].sellingPlanId?.priceAdjustments ?? 1)) * updated.lines[0].quantity)
    setCart(updated);
  }

  async function removeItem(lineId: string) {
    if (!cart) return;
    const updated = await CartStore.removeLine(cart.id, lineId);
    setCart(updated);
  }

  async function updateItem(lineId: string, quantity: number) {
    if (!cart) return;
    const updated = await CartStore.updateLine(cart.id, lineId, quantity);
    setCart(updated);
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        loading,
        open,
        setOpen,
        viewCart,
        addItem,
        removeItem,
        updateItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
