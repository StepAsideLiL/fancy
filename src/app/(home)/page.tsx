import { sanguardRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Page() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto w-96">
        <h1 className={cn("text-center text-4xl", sanguardRegular.className)}>
          Fancy
        </h1>
      </section>
    </main>
  );
}
