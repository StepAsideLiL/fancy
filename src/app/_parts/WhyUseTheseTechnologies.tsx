"use client";

import { motion, useScroll, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

export default function WhyUseTheseTechnologies() {
  return (
    <section className="min-h-screen bg-foreground text-background">
      <div className="h-40"></div>

      <div className="container mx-auto flex h-screen max-w-5xl flex-col items-center justify-center gap-10 px-5 md:px-0">
        <ScrollTextOpacity>
          Next.js, Tailwind CSS, Shadcn/UI, and Motion form a powerful web
          development stack. Next.js offers robust React framework features,
          Tailwind enables rapid styling, shadcn/ui provides accessible UI
          components, and Motion adds fluid animations. Together, they empower
          developers to build efficient, responsive, and visually appealing web
          applications quickly.
        </ScrollTextOpacity>
      </div>
    </section>
  );
}

function ScrollTextOpacity({ children }: { children: string }) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "start 0.20"],
  });

  const words = children.split(" ");

  return (
    <h1 ref={ref} className="font-mono text-xl md:text-2xl">
      {words.map((word, index) => {
        const start = index / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={index} progress={scrollYProgress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </h1>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: number[];
}) {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className="relative inline-block">
      <span className="absolute opacity-20">{children}&nbsp;</span>
      <motion.span style={{ opacity: opacity }}>{children}&nbsp;</motion.span>
    </span>
  );
}
