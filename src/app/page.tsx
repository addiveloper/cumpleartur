/* eslint-disable @next/next/no-img-element */
"use client";

import { Button } from "@/components/ui/button";
import { Aside } from "@/components/unlock/aside";
import { useChallenges } from "@/stores/challenges-store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  const router = useRouter();
  const { isChallengeCompleted, nextChallenge } = useChallenges();

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

  if (!isCompleted) {
    return <></>;
  }

  return isCompleted && isChallengeCompleted(4) ? (
    <main className="h-full w-full flex">
      <Aside />
      <section className="p-8 h-full w-full overflow-y-auto">
        <h1 className="font-bold text-4xl">Inicio</h1>
        <p className="opacity-80">Bienvenido al regalo de tu cumpleaños!</p>
        <section className="grid grid-cols-[auto_1fr] gap-8">
          <div className="w-full pt-16 h-full flex flex-col gap-1">
            <h2 className="font-bold text-2xl">Papu</h2>
            <p className="opacity-80 mt-2">Te deseo un feliz papucumpleaños.</p>
            <p className="opacity-80">Espero que te haya gustado tu regalo.</p>
            <p className="opacity-80 mt-4">
              Tenía más retos y logros para hacer, pero el tiempo no me ayudaba.
            </p>
            <p className="opacity-80">
              Te dije que te prepararas, pero era bait pa{"'"} darte miedo, los
              retos eran bien fáciles :v
            </p>
            <p className="opacity-80 mt-4">
              Aún tengo el pdf mágico con todos los retos y el plan de dos años.
            </p>
            <p className="opacity-80">
              Pero como no lo pude hacer completo, capaz se extiende hasta 3
              años de plan.
            </p>
            <p className="opacity-80">Prepara el ano.</p>
            <p className="opacity-80 mt-4">
              Si no has ido a revisar el rewind. Te recomiendo hacerlo.
            </p>
            <p className="opacity-80">
              Ahí está la primera pista para tu regalo del año que viene.
            </p>
            <p className="opacity-80 mt-4">
              El tiempo fue mi mayor enemigo, pero aún así pude completarlo.
            </p>
            <p className="opacity-80">
              En la fecha de los retos dice que terminé en mayo. Pero eso son
              solo los retos.
            </p>
            <p className="opacity-80">El resto lo terminé hoy 29/07/2024</p>
            <p className="opacity-80">
              Está página seguirá vigente hasta el día de tu cum el año que
              viene.
            </p>
            <p className="opacity-80">Se vienen cositas</p>
            <p className="opacity-80 mt-4">
              Espero que la sigas pasando papu genial.
            </p>
            <p className="font-medium text-yellow-300 opacity-80">
              Atte. Miguel
            </p>
          </div>
          <div className="w-full pt-16 h-full flex items-center justify-center">
            <img
              src="/artur.jpeg"
              alt="Arturo"
              className="rounded-lg w-auto h-full object-cover"
            />
          </div>
        </section>
      </section>
    </main>
  ) : (
    <main className="h-full w-full flex">
      <Aside />
      <section className="p-8 h-full w-full">
        <h1 className="font-bold text-4xl">Inicio</h1>
        <p className="opacity-80">Bienvenido al regalo de tu cumpleaños!</p>
        <section className="w-full pt-16 h-full flex flex-col items-center justify-center gap-4">
          <p>
            Pensé que eras más tonto, capaz hay que aumentar la dificultad...
          </p>
          <Button asChild variant={"default"}>
            <Link href={nextChallenge.link!}>Ir al siguiente reto</Link>
          </Button>
        </section>
      </section>
    </main>
  );
}
