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
import { introSchema } from "@/schemas/intro";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useChallenges } from "@/stores/challenges-store";

type IntroFormValues = z.infer<typeof introSchema>;

export const IntroForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { completeChallenge } = useChallenges();

  const form = useForm<IntroFormValues>({
    resolver: zodResolver(introSchema),
    defaultValues: {
      link: "",
    },
  });

  const onSubmit = async (data: IntroFormValues) => {
    try {
      setError("");
      setLoading(true);
      const res = await fetch("/api/intro", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        setError("Arregla tu internet, gye");
      }

      const response = await res.json();

      if (response.success) {
        completeChallenge(1);
        router.push("/challenges/2-ciego#1");
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
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="text"
                  placeholder="https??????"
                  {...field}
                  disabled={loading}
                />
              </FormControl>
              <FormMessage />
              <span>{error}</span>
            </FormItem>
          )}
        />
        <Button disabled={loading} type="submit">
          Gogogo
        </Button>
      </form>
    </Form>
  );
};
