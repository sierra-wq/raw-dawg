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

import { z } from "zod";


import { useState } from "react";
import { Star } from "lucide-react";


export const ReviewSchema = z.object({
  rating: z.number().min(1, "Please select a rating").max(5),
  review: z.string().min(5, "Review must be at least 5 characters"),
});

export type ReviewFormType = z.infer<typeof ReviewSchema>;


export default function ReviewDialog({
  productId,
  customerId,
  customerName,
  triggerClassName,
}: {
  productId: string;
  customerId: string;
  customerName: string;
  triggerClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
  } = useForm<ReviewFormType>({
    resolver: zodResolver(ReviewSchema),
    defaultValues: {
      rating: 0,
      review: "",
    },
  });

  // Sync rating with RHF
  function handleRating(n: number) {
    setRating(n);
    setValue("rating", n);
  }

  async function onSubmit(values: ReviewFormType) {
    try{

    const data = await fetch("/api/review/create", {
      headers: {
        "Content-Type": "application/json",
    },
      method: "POST",
      body: JSON.stringify({
        rating: values.rating,
        review: values.review,
        productId,
        customerId,
        customerName,
      }),
    });

    console.log(data);
    }
    catch(err)
    {
      console.log(err);
    }

    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className={triggerClassName ?? "bg-primary text-secondary font-bold"}>
          Write a Review
        </Button>
      </DialogTrigger>

      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Leave a Review</DialogTitle>
          <DialogDescription>
            Share your experience with this Raw Dawg meal.
          </DialogDescription>
        </DialogHeader>

        {/* FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 mt-2">

          {/* Rating */}
          <div className="flex gap-2 justify-center">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star
                key={n}
                onClick={() => handleRating(n)}
                className={`w-8 h-8 cursor-pointer transition ${
                  n <= rating ? "fill-yellow-500 text-yellow-500" : "text-gray-400"
                }`}
              />
            ))}
          </div>
          {errors.rating && (
            <p className="text-red-500 text-sm text-center">
              {errors.rating.message}
            </p>
          )}

          {/* Review Text */}
          <div>
            <Textarea
              {...register("review")}
              placeholder="Tell other dog parents what you think..."
              className="min-h-[120px]"
            />
            {errors.review && (
              <p className="text-red-500 text-sm">
                {errors.review.message}
              </p>
            )}
          </div>

          <DialogFooter className="flex w-full justify-between gap-3 mt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              className="w-full"
            >
              Cancel
            </Button>

            <Button
              disabled={isSubmitting}
              className="bg-primary text-secondary w-full font-bold"
            >
              {isSubmitting ? "Saving..." : "Submit Review"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
