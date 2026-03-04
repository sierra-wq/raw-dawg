"use client";

import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { email, z } from "zod";


import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Input } from "./ui/input";
import { useAuth } from "@/store/authProvider";



export default function NotificationDialog({
  message,
  open,
  setOpen
}: {
  message: string;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
      <DialogContent className="max-w-md bg-primary">
        <DialogHeader>
          <DialogTitle>Notification</DialogTitle>
        
        </DialogHeader>

          <p className="text-center text-lg font-arvo mt-4">
            {message}
          </p>

          <DialogFooter className="flex w-full justify-between gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {   
                setOpen(false)}}
              className="w-full hover:bg-quinary hover:text-white"
            >
              Close
            </Button>

           
          </DialogFooter>
        
      </DialogContent>
    </Dialog>
  );
}
