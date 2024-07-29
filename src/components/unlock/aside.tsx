"use client";

import Link from "next/link";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { useChallenges } from "@/stores/challenges-store";

export const Aside = () => {
  const { isChallengeCompleted } = useChallenges();

  return (
    <aside className="h-full w-full max-w-72 border-r border-neutral-200 dark:border-neutral-800 p-4 overflow-hidden flex flex-col justify-between">
      <div>
        <h1 className="font-bold mb-4">Joyeux Anniversaire, Arturo!</h1>
        <ul className="flex flex-col gap-2">
          <li>
            <Button asChild variant={"ghost"} className="w-full justify-start">
              <Link href="/">Inicio</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"ghost"} className="w-full justify-start">
              <Link href="/challenges">Retos</Link>
            </Button>
          </li>
          <li>
            <Button asChild variant={"ghost"} className="w-full justify-start">
              <Link href="/rewards">Logros</Link>
            </Button>
          </li>
          {isChallengeCompleted(3) && (
            <li>
              <Button
                asChild
                variant={"ghost"}
                className="w-full justify-start"
              >
                <Link href="/tacoarepa">TacoArepa</Link>
              </Button>
            </li>
          )}
          {isChallengeCompleted(4) && (
            <li>
              <Button
                asChild
                variant={"ghost"}
                className="w-full justify-start"
              >
                <Link href="/rewind">Rewind</Link>
              </Button>
            </li>
          )}
        </ul>
      </div>
      <div className="flex justify-between items-center">
        <ThemeToggle />
      </div>
    </aside>
  );
};
