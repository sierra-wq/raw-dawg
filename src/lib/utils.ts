import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cleanInput(obj: Record<string, any>) {
  return Object.fromEntries(
    Object.entries(obj).filter(([_, v]) => {
      // Keep booleans and numbers even if false/0
      if (typeof v === "boolean" || typeof v === "number") return true;

      // Remove null, undefined, empty string
      return v !== null && v !== undefined && v !== "";
    })
  );
}