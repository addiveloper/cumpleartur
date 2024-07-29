/* eslint-disable @next/next/no-img-element */
"use client";

import { Aside } from "@/components/unlock/aside";
import { useChallenges } from "@/stores/challenges-store";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function RewindPage() {
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

  if (!isChallengeCompleted(3)) {
    router.push("/");
  }

  return (
    isCompleted && (
      <main className="h-full w-full flex">
        <Aside />
        <section className="p-8 h-full w-full">
          <h1 className="font-bold text-4xl">TacoArepa</h1>
          <p className="opacity-80">
            Aquí encontrarás los mensajes que te manda TacoArepa!
          </p>
          <p className="text-xs opacity-80 mt-2">
            Lamentablemente, no me dió tiempo de contactar a todos. Solo pude
            escribirle a 2 porque estaba hablando con ellos. :(
          </p>
          <section className="w-full pt-16 grid grid-cols-2 gap-4">
            <article className="flex gap-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
              <div className="h-48 overflow-hidden flex items-start justify-start">
                <img
                  src="/yon.jpeg"
                  alt="Yon"
                  className="rounded-lg w-full h-auto object-cover"
                />
              </div>
              <div>
                <p className="opacity-60 text-xs">
                  El negro más negro de los negros
                </p>
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-black">El Yonis</h2>
                  <span className="text-yellow-500"></span>
                </div>
                <p className="opacity-80 text-sm mt-2">
                  {`"Feliz cumple Artur maricon hijoderemilputa 🔥🔥🔥 Hermanito ⚔️9️⃣"`}
                </p>
              </div>
            </article>
            <article className="grid grid-cols-[1fr_auto] gap-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
              <div className="h-full overflow-hidden flex items-center justify-center">
                <img
                  src="/diego.jpeg"
                  alt="Diego"
                  className="rounded-lg h-full w-auto object-cover"
                />
              </div>
              <div>
                <p className="opacity-60 text-xs">
                  El cabro más cabro de los cabros
                </p>
                <div className="flex w-full justify-between items-center">
                  <h2 className="font-black">El Potoyín</h2>
                  <span className="text-yellow-500"></span>
                </div>
                <p className="opacity-80 text-sm mt-2">
                  Te manda un audio el Diego:
                </p>
                <div className="flex pt-2">
                  <audio src="/yego.mp3" controls></audio>
                </div>
              </div>
            </article>
          </section>
        </section>
      </main>
    )
  );
}
