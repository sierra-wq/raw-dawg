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


export const SubscriberEmailSchema = z.object({
  email: z.email("Please enter a valid email address"),
});

export type SubscriberFormType = z.infer<typeof SubscriberEmailSchema>;

export default function SubscriberDialog({
  open,
  setOpen
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {


  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<SubscriberFormType>({
    resolver: zodResolver(SubscriberEmailSchema),
    defaultValues: {
      email: "",
    },
  });

  const { handleSubscribe, subscribeLoading } = useAuth();
  const [message, setMessage] = useState("Subscribe to get notified when we launch!");
  const [dialogOpen, setDialogOpen] = useState(false);



  useEffect(() => {
    const storedEmail = localStorage.getItem("subscriberEmail");
    if (storedEmail) {
      const parsedData = JSON.parse(storedEmail);
      if (parsedData.show === false) {
        setOpen(false);
      }
    }
  }, []);




  async function onSubmit(values: SubscriberFormType) {

    const subscriberValues = values as SubscriberFormType;
    const res = await handleSubscribe(subscriberValues.email);

    if (!res.ok) {
      //alert(res.errors?.map((e: any) => e.message).join(", "));
      setMessage(res?.message || "Error subscribing to newsletter. Please try again.");
      setDialogOpen(true);
      setValue("email", ""); // Clear the input field after error
      console.error("Error subscribing to newsletter:", res.errors);
      return;
    }
    setMessage("Thank you for subscribing! We'll keep you updated.");
    setDialogOpen(true);
    setValue("email", ""); // Clear the input field after successful subscription


    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>

      <DialogContent className="max-w-md bg-primary">
        <DialogHeader>
          <DialogTitle className=" font-bold ">Join the Pack </DialogTitle>
          <DialogDescription>
            Be first in line for launch, drops, and exclusive updates.
          </DialogDescription>
        </DialogHeader>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-2">



          {/* Review Text */}
          <div>
            <Input
              type='email'
              className="focus:border-2 focus-within:outline-none text-lg"
              {...register("email")}
              placeholder="Enter your email address"

            />
            {errors.email && (
              <p className="text-red-500 text-sm">
                {errors.email.message}
              </p>
            )}
          </div>

          <DialogFooter className="flex w-full justify-between gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                localStorage.setItem("subscriberEmail", JSON.stringify({ 'show': false }));
                setOpen(false)
              }}
              className="w-full hover:bg-quinary hover:text-white"
            >
              Cancel
            </Button>

            <Button
              disabled={isSubmitting}
              className="bg-tertiary text-primary hover:bg-quaternary hover:text-primary w-full font-bold"
            >
              {isSubmitting ? "Saving..." : "Subscribe Now"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
