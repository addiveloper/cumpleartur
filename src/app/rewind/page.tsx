"use client";

import { Aside } from "@/components/unlock/aside";
import { useChallenges } from "@/stores/challenges-store";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";

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

  if (!isChallengeCompleted(4)) {
    router.push("/");
  }

  return (
    isCompleted && (
      <>
        <main className="h-full w-full flex">
          <Aside />
          <section className="p-8 h-full w-full overflow-y-auto">
            <h1 className="font-bold text-4xl">Rewind</h1>
            <p className="opacity-80">
              Los regalos que te he dado en un solo lugar!
            </p>
            <section className="w-full pt-16 grid grid-cols-2 gap-8">
              <article className="flex gap-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                <div className="w-full">
                  <p className="opacity-60 text-xs">
                    Que recuerdos cuando estos famosos te felicitaron
                  </p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">Arturín Famosín</h2>
                    <span className="text-yellow-500"></span>
                  </div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MmAI849qh6M?si=J0v9ytD3hQXLavRw"
                    title="Arturín Famosín"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-auto mt-3 aspect-video"
                  ></iframe>
                </div>
              </article>
              <article className="flex gap-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                <div className="w-full">
                  <p className="opacity-60 text-xs">
                    El mejor álbum de la historia
                  </p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">CUM</h2>
                    <span className="text-yellow-500"></span>
                  </div>
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/videoseries?si=U8y5J1qrtteD4xvb&amp;list=PLvlWjkDYQZ7OUVhScRTyB94Ik1XhzknZr"
                    title="CUM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className="w-full h-auto mt-3 aspect-video"
                  ></iframe>
                </div>
              </article>
              <article className="flex gap-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                <div>
                  <p className="opacity-60 text-xs">
                    Un página para el recuerdo
                  </p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">Joyeux Anniversaire, Arturo!</h2>
                    <span className="text-yellow-500"></span>
                  </div>
                  <p className="opacity-80 text-sm mt-2">
                    Es esta página oe, aqui no hay video :v
                  </p>
                  <p className="opacity-80 text-sm mt-2">
                    Por qué sigues leyendo?
                  </p>
                  <p className="opacity-80 text-sm mt-2">...</p>
                  <p className="opacity-80 text-sm mt-2">
                    Que no hay nada acá oe
                  </p>
                  <p className="opacity-80 text-sm mt-2">
                    Mira el siguiente, gye
                  </p>
                </div>
              </article>
              <article className="flex gap-4 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4 hover:bg-neutral-100 hover:dark:bg-neutral-900 transition">
                <div>
                  <p className="opacity-60 text-xs">???????</p>
                  <div className="flex w-full justify-between items-center">
                    <h2 className="font-black">Soon...</h2>
                    <span className="text-yellow-500"></span>
                  </div>
                  <p className="opacity-80 text-sm mt-2 inline-flex flex-col">
                    papucontraseña: se acabó el time papu :v{" "}
                    <span className="mt-2">
                      █▬█?????██▬██▄▌ █▬██▬█ ?????▐▅▚ ▄▌▐▅▚ ▐𝟯█▬███▬██▄▌??????
                      █▬██▬█ ▐▅▚ ▄▌▐▅▚?????▐𝟯█▬███▬██▄▌ █▬██▬█????? ▐▅▚
                      ▄▌▐▅▚????? ▐𝟯?????█▬███▬??????????██▄▌ █▬?????██▬█ ▐▅▚
                      ▄▌▐▅▚ ▐𝟯█▬███▬██▄▌ █▬██▬█ ▐▅▚ ▄▌???▐▅▚
                      ▐𝟯?????█▬███▬?????██▄▌ █?????▬██▬█ ▐▅▚ ▄▌??▐▅▚ ▐𝟯
                    </span>
                  </p>
                </div>
              </article>
            </section>
          </section>
        </main>
      </>
    )
  );
}
