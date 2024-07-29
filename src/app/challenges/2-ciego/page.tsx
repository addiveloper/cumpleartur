import { ButtonCiego } from "@/components/challenges/2-ciego/button-ciego";
import { StoryTelling } from "@/components/story-telling";
import { Button } from "@/components/ui/button";

export default function CiegoPage() {
  return (
    <main className="h-screen w-full">
      <StoryTelling id="1">
        <h2 className="text-5xl text-center font-bold">¡Muy bien!</h2>
      </StoryTelling>
      <StoryTelling id="2">
        <h2 className="text-5xl text-center font-bold">
          ¡Lograste pasar el primer reto!
        </h2>
      </StoryTelling>
      <StoryTelling id="3">
        <h2 className="text-5xl text-center font-bold">
          Ahora que ya sabes tu misión...
        </h2>
      </StoryTelling>
      <StoryTelling id="4">
        <h2 className="text-5xl text-center font-bold">
          Prepara el ano, y mira el segundo reto
        </h2>
      </StoryTelling>
      <StoryTelling id="5">
        <h2 className="text-5xl text-center font-bold">
          Supongo que tus ojos deben estar ardiendo
        </h2>
      </StoryTelling>
      <StoryTelling id="6">
        <h2 className="text-5xl text-center font-bold">
          Eso lo podríamos solucionar muy rápido
        </h2>
      </StoryTelling>
      <StoryTelling id="7">
        <h2 className="text-5xl text-center font-bold">
          Bueno, {`"`}podríamos{`"`} no...
        </h2>
      </StoryTelling>
      <StoryTelling id="8">
        <h2 className="text-5xl text-center font-bold">Podrías</h2>
      </StoryTelling>
      <StoryTelling id="9">
        <h2 className="text-5xl text-center font-bold">
          Tu reto es encontrar el botón para cambiar al modo oscuro
        </h2>
      </StoryTelling>
      <StoryTelling id="10">
        <h2 className="text-5xl text-center font-bold">
          ¡Mucha suerte en encontrarlo!
        </h2>
      </StoryTelling>
      <section
        id="11"
        className="relative h-screen flex flex-col justify-center items-center md:max-w-7xl md:mx-auto px-4"
      >
        <h2 className="text-5xl text-center font-bold">¿Dónde estará?</h2>
        <div className="absolute bottom-32 left-[50%]">
          <div className="relative left-[-50%] flex gap-8">
            <Button asChild variant={"default"}>
              <a href="#10">Atrás</a>
            </Button>
          </div>
        </div>
      </section>
      <section
        id="12"
        className="relative h-screen flex flex-col justify-center items-center md:max-w-7xl md:mx-auto px-4"
      >
        <div className="absolute bottom-32 left-[50%]">
          <div className="relative left-[-50%] flex gap-8">
            <ButtonCiego />
          </div>
        </div>
      </section>
    </main>
  );
}
