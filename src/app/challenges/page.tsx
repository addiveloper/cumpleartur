"use client";

import { Aside } from "@/components/unlock/aside";
import { useChallenges } from "@/stores/challenges-store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ChallengesPage() {
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
    <main className="h-full w-full flex">
      {isCompleted && (
        <>
          <Aside />
          <section className="p-8 h-full w-full">
            <h1 className="font-bold text-4xl">Retos</h1>
            <p className="opacity-80">
              Aquí van a estar todos los retos que has completado.
            </p>
            <p className="text-xs opacity-80 mt-2">
              Funfact, las fechas que salen son los días en los que terminé de
              programar el reto!
            </p>
            <section className="w-full pt-16 grid grid-cols-4 gap-4">
              {/* Intro */}
              <article
                onClick={() => router.push("/challenges/intro#1")}
                className="cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition"
              >
                <div className="flex w-full justify-between items-center mb-1">
                  <h2 className="font-black">Intro</h2>
                  <p className="text-sm opacity-80">05/03/24</p>
                </div>
                <span className="py-1 px-2 text-xs text-green-700 dark:bg-green-800 dark:text-green-400 dark:border-green-600 font-bold bg-green-100 rounded-lg border border-green-300">
                  Fácil
                </span>
                <p className="opacity-80 text-sm mt-2">
                  Un gran comienzo, una gran responsabilidad, una gran aventura.
                </p>
              </article>

              {/* Ciego */}
              <article
                onClick={() => router.push("/challenges/2-ciego#1")}
                className="cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition"
              >
                <div className="flex w-full justify-between items-center mb-1">
                  <h2 className="font-black">Ciego</h2>
                  <p className="text-sm opacity-80">30/04/24</p>
                </div>
                <span className="py-1 px-2 text-xs text-orange-700 dark:bg-orange-700 dark:text-orange-300 dark:border-orange-600 font-bold bg-orange-100 rounded-lg border border-orange-300">
                  Normal
                </span>
                <p className="opacity-80 text-sm mt-2">
                  Unos lentes antiradiación no vendrían mal, pero no por mucho
                  tiempo.
                </p>
              </article>

              {/* Quiz */}
              {isChallengeCompleted(3) && (
                <article
                  onClick={() => router.push("/challenges/3-quiz#1")}
                  className="cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition"
                >
                  <div className="flex w-full justify-between items-center mb-1">
                    <h2 className="font-black">Quiz</h2>
                    <p className="text-sm opacity-80">25/05/24</p>
                  </div>
                  <span className="py-1 px-2 text-xs text-green-700 dark:bg-green-800 dark:text-green-400 dark:border-green-600 font-bold bg-green-100 rounded-lg border border-green-300">
                    Fácil
                  </span>
                  <p className="opacity-80 text-sm mt-2">
                    Preguntas, preguntas y más preguntas, ojalá no hayas fallado
                    ninguna.
                  </p>
                </article>
              )}

              {/* !shi */}
              {isChallengeCompleted(4) && (
                <article
                  onClick={() => router.push("/challenges/4-shi#1")}
                  className="cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition"
                >
                  <div className="flex w-full justify-between items-center mb-1">
                    <h2 className="font-black">!shi</h2>
                    <p className="text-sm opacity-80">26/05/24</p>
                  </div>
                  <span className="py-1 px-2 text-xs text-green-700 dark:bg-green-800 dark:text-green-400 dark:border-green-600 font-bold bg-green-100 rounded-lg border border-green-300">
                    Fácil
                  </span>
                  <p className="opacity-80 text-sm mt-2">
                    No, negativo, en absoluto, para nada, de ningún modo, nel,
                    nope, nou.
                  </p>
                </article>
              )}

              {/* Fórmula de inspección */}
              {isChallengeCompleted(5) && (
                <article
                  onClick={() => router.push("/challenges/5-formula#1")}
                  className="cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition"
                >
                  <div className="flex w-full justify-between items-center mb-1">
                    <h2 className="font-black">Fórmula de inspección</h2>
                    <p className="text-sm opacity-80">11/05/24</p>
                  </div>
                  <span className="py-1 px-2 text-xs text-red-700 dark:bg-red-700 dark:text-red-300 dark:border-red-600 font-bold bg-red-100 rounded-lg border border-red-300">
                    Difícil
                  </span>
                  <p className="opacity-80 text-sm mt-2">
                    Click derecho, inspeccionar, oh my sigma. Senior Javascript.
                  </p>
                </article>
              )}

              {/* The Long Way */}
              {isChallengeCompleted(6) && (
                <article
                  onClick={() => router.push("/challenges/6-thelongway#1")}
                  className="cursor-pointer border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition"
                >
                  <div className="flex w-full justify-between items-center mb-1">
                    <h2 className="font-black">The Long Way</h2>
                    <p className="text-sm opacity-80">03/06/24</p>
                  </div>
                  <span className="py-1 px-2 text-xs text-red-700 dark:bg-red-700 dark:text-red-300 dark:border-red-600 font-bold bg-red-100 rounded-lg border border-red-300">
                    Difícil
                  </span>
                  <p className="opacity-80 text-sm mt-2">
                    Largo camino, poca distancia. El viaje es lo que importa.
                    Disfrútalo
                  </p>
                </article>
              )}
            </section>
          </section>
        </>
      )}
    </main>
  );
}
