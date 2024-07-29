import Link from "next/link";
import { Button } from "./ui/button";

interface StoryTellingProps {
  id: string;
  children?: React.ReactNode;
}

export const StoryTelling = ({ id, children }: StoryTellingProps) => {
  return (
    <section
      id={id}
      className="relative h-screen flex flex-col justify-center items-center md:max-w-7xl md:mx-auto px-4"
    >
      {children}
      <div className="absolute bottom-32 left-[50%]">
        <div className="relative left-[-50%] flex gap-8">
          <Button asChild variant={"default"}>
            <a href={`#${Number(id) - 1}`}>Atrás</a>
          </Button>
          <Button asChild variant={"default"}>
            <a href={`#${Number(id) + 1}`}>Siguiente</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
