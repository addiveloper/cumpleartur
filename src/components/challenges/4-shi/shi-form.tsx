"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { shiSchema } from "@/schemas/shi";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useChallenges } from "@/stores/challenges-store";

type ShiFormValues = z.infer<typeof shiSchema>;

export const ShiForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { completeChallenge } = useChallenges();

  const form = useForm<ShiFormValues>({
    resolver: zodResolver(shiSchema),
    defaultValues: {
      answer: "",
    },
  });

  const onSubmit = async (data: ShiFormValues) => {
    try {
      setError("");
      setLoading(true);
      const res = await fetch("/api/shi", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("Arregla tu internet, gye");
      }

      const response = await res.json();

      if (response.success) {
        completeChallenge(4);
        router.push("/");
      } else {
        setError(response.error);
      }
    } catch (error) {
      setError("Arregla tu internet, gye");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col justify-center items-center gap-8"
      >
        <FormField
          control={form.control}
          name="answer"
          render={({ field }) => (
            <FormItem className="flex flex-col justify-center items-center">
              <FormControl>
                <Input
                  type="text"
                  placeholder="!shi"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
              <span className="text-red-500">{error}</span>
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit" className="font-bold">
          !shi
        </Button>
      </form>
    </Form>
  );
};
