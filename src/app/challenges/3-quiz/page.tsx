import { StoryTelling } from "@/components/story-telling";
import { Button } from "@/components/ui/button";

export default function QuizPage() {
  return (
    <main className="h-screen w-full">
      <StoryTelling id="1">
        <h2 className="text-5xl text-center font-bold">
          Yaraza, lo encontraste
        </h2>
      </StoryTelling>
      <StoryTelling id="2">
        <h2 className="text-5xl text-center font-bold">
          Espero que hayas estudiado porque hoy toca examen
        </h2>
      </StoryTelling>
      <StoryTelling id="3">
        <h2 className="text-5xl text-center font-bold">
          Pero no un examen cualquiera...
        </h2>
      </StoryTelling>
      <StoryTelling id="4">
        <h2 className="text-5xl text-center font-bold">¡Es un PAPU EXAMEN!</h2>
      </StoryTelling>
      <section
        id="5"
        className="relative h-screen flex flex-col justify-center items-center md:max-w-7xl md:mx-auto px-4"
      >
        <h2 className="text-5xl text-center font-bold">¿Estás listo?</h2>
        <div className="absolute bottom-32 left-[50%]">
          <div className="relative left-[-50%] flex gap-8">
            <Button asChild variant={"default"}>
              <a href="/challenges/3-quiz/papuexamen">shi</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
