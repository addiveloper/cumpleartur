"use client";

import * as z from "zod";
import { QuestionThreeSchema } from "@/schemas/papuexamen";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { QUESTIONS } from "@/constants/papuexamen/questions";

interface QuestionThreeProps {
  setQuestion: (question: string) => void;
  setProgress: (number: number) => void;
}

export const QuestionThree = ({
  setQuestion,
  setProgress,
}: QuestionThreeProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof QuestionThreeSchema>>({
    resolver: zodResolver(QuestionThreeSchema),
  });

  const handleSubmit = async (values: z.infer<typeof QuestionThreeSchema>) => {
    setIsLoading(true);
    setError("");
    try {
      const res = await fetch("/api/papuexamen", {
        method: "POST",
        body: JSON.stringify({
          question: "3",
          answer: values.answer,
        }),
      });

      if (!res.ok) {
        console.log("error");
      }

      const response = await res.json();

      if (!response.success) {
        setError(response.error);
      }

      if (response.success) {
        setProgress(85);
        setQuestion(QUESTIONS[4]);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="flex w-full justify-between">
        <div>
          <p className="dark:text-neutral-400 text-neutral-600">
            Tercera papu-pregunta :v
          </p>
          <h2 className="font-bold text-3xl pb-16">
            ¿Quién es el mejor papu-admin?
          </h2>
        </div>
        <p className="text-red-400 font-bold">{error}</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormField
            control={form.control}
            name="answer"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid grid-cols-4 gap-16"
                  >
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem
                          value="papumiguel"
                          className="hidden peer"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormLabel className="cursor-pointer peer-data-[state=checked]:border-neutral-600 dark:peer-data-[state=checked]:bg-white peer-data-[state=checked]:bg-neutral-950 dark:peer-data-[state=checked]:text-black peer-data-[state=checked]:text-white font-bold text-2xl transition rounded-lg flex w-full border dark:border-neutral-800 justify-center items-center aspect-square hover:bg-neutral-100 dark:hover:bg-neutral-900">
                        Papu Miguel
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem
                          value="papuarturo"
                          className="hidden peer"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormLabel className="cursor-pointer peer-data-[state=checked]:border-neutral-600 dark:peer-data-[state=checked]:bg-white peer-data-[state=checked]:bg-neutral-950 dark:peer-data-[state=checked]:text-black peer-data-[state=checked]:text-white font-bold text-2xl transition rounded-lg flex w-full border dark:border-neutral-800 justify-center items-center aspect-square hover:bg-neutral-100 dark:hover:bg-neutral-900">
                        Papu Arturo
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem
                          value="papuyon"
                          className="hidden peer"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormLabel className="cursor-pointer peer-data-[state=checked]:border-neutral-600 dark:peer-data-[state=checked]:bg-white peer-data-[state=checked]:bg-neutral-950 dark:peer-data-[state=checked]:text-black peer-data-[state=checked]:text-white font-bold text-2xl transition rounded-lg flex w-full border dark:border-neutral-800 justify-center items-center aspect-square hover:bg-neutral-100 dark:hover:bg-neutral-900">
                        Papu Yon
                      </FormLabel>
                    </FormItem>
                    <FormItem>
                      <FormControl>
                        <RadioGroupItem
                          value="papubermeo"
                          className="hidden peer"
                          disabled={isLoading}
                        />
                      </FormControl>
                      <FormLabel className="cursor-pointer peer-data-[state=checked]:border-neutral-600 dark:peer-data-[state=checked]:bg-white peer-data-[state=checked]:bg-neutral-950 dark:peer-data-[state=checked]:text-black peer-data-[state=checked]:text-white font-bold text-2xl transition rounded-lg flex w-full border dark:border-neutral-800 justify-center items-center aspect-square hover:bg-neutral-100 dark:hover:bg-neutral-900">
                        Papu Bermeo
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />
          <div className="flex justify-center pt-12">
            <Button
              variant={"default"}
              size="lg"
              className="font-bold"
              type="submit"
              disabled={isLoading}
            >
              Revisar
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
