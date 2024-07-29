"use client";

import { Aside } from "@/components/unlock/aside";
import { useChallenges } from "@/stores/challenges-store";
import { Medal } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function RewardsPage() {
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const { isChallengeCompleted } = useChallenges();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const isCompleted = isChallengeCompleted(1) && isChallengeCompleted(2);

  if (!isChallengeCompleted(1)) {
    router.push("/challenges/intro#1");
  }

  if (!isChallengeCompleted(2) && isChallengeCompleted(1)) {
    router.push("/challenges/2-ciego#1");
  }

  return (
    isCompleted && (
      <>
        <main className="h-full w-full flex">
          <Aside />
          <section className="p-8 h-full w-full">
            <h1 className="font-bold text-4xl">Logros</h1>
            <p className="opacity-80">
              Aquí encontrarás todas las cosas que desbloqueaste.
            </p>
            <p className="text-xs opacity-80 mt-2">
              Funfact, aquí hay mucho lore del proceso!
            </p>
            <section className="w-full pt-16 grid grid-cols-4 gap-4">
              {isChallengeCompleted(2) && (
                <article className=" border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                  <p className="opacity-60 text-xs">Reto Ciego</p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">Modo Oscuro</h2>
                    <span className="text-yellow-500">
                      <Medal />
                    </span>
                  </div>
                  <p className="opacity-80 text-sm mt-2">
                    Pensaba en hacerlo mucho más dificil, pero al ser el segundo
                    reto decidí hacerlo así
                  </p>
                </article>
              )}
              {isChallengeCompleted(3) && (
                <article className=" border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                  <p className="opacity-60 text-xs">Reto Quiz</p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">TacoArepa</h2>
                    <span className="text-purple-400">
                      <Medal />
                    </span>
                  </div>
                  <p className="opacity-80 text-sm mt-2">
                    No me dió tiempo de escribirle al resto, pero si cumplieron,
                    no como en mi cum, fue.
                  </p>
                </article>
              )}
              {isChallengeCompleted(4) && (
                <article className=" border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                  <p className="opacity-60 text-xs">Reto !shi</p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">Rewind</h2>
                    <span className="text-green-500">
                      <Medal />
                    </span>
                  </div>
                  <p className="opacity-80 text-sm mt-2">
                    Que linda colección de los regalos. Nunca se olvidarán. PD:
                    El álbum es el mejor
                  </p>
                </article>
              )}
            </section>
          </section>
        </main>
      </>
    )
  );
}
