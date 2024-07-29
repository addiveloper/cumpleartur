import { ShiForm } from "@/components/challenges/4-shi/shi-form";

export default function ShiPage() {
  return (
    <main className="h-screen w-full">
      <section
        id="1"
        className="relative h-screen flex flex-col justify-center items-center md:max-w-7xl md:mx-auto px-4"
      >
        <h2 className="text-5xl text-center font-bold mb-8">!shi</h2>
        <ShiForm />
      </section>
    </main>
  );
}
