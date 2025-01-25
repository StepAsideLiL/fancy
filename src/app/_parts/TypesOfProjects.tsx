"use client";

import { sanguardRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

export default function TypesOfProjects() {
  return (
    <section className="overflow-hidden">
      <TitleAndSubtitle />

      <BuiltWithNextjsEx1 />

      <BuiltWithNextjsEx2 />

      <BuiltWithNextjsEx3 />

      <div className="h-96"></div>
    </section>
  );
}

function TitleAndSubtitle() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.2", "end 0.9"],
  });

  const headingScale = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const subheadingOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const subheadingY = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="mx-auto flex min-h-screen max-w-2xl items-center justify-center">
      <div ref={ref}>
        <motion.h1
          style={{ scale: headingScale }}
          className="text-center font-mono text-3xl font-bold"
        >
          Built with Nextjs
        </motion.h1>
        <motion.p
          style={{ opacity: subheadingOpacity, y: subheadingY }}
          className="text-center font-mono"
        >
          Nextjs can be used for many type of project.
        </motion.p>
      </div>
    </div>
  );
}

function BuiltWithNextjsEx1() {
  const MotionImage = motion(Image);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.9"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const imageTitleX = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="mx-auto min-h-screen max-w-7xl">
      <div className="flex items-end justify-center">
        <MotionImage
          style={{ opacity, x: imageX }}
          src={"/assets/nike.png"}
          alt=""
          width={800}
          height={400}
          className="border-4 border-foreground"
        />

        <motion.h2
          style={{ opacity, x: imageTitleX }}
          className={cn(sanguardRegular.className, "text-9xl")}
        >
          Ecommerce
        </motion.h2>
      </div>
    </div>
  );
}

function BuiltWithNextjsEx2() {
  const MotionImage = motion(Image);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.9"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const imageTitleX = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="mx-auto min-h-screen max-w-7xl">
      <div className="flex items-end justify-center">
        <MotionImage
          style={{ opacity, x: imageX }}
          src={"/assets/spotify.png"}
          alt=""
          width={800}
          height={400}
          className="border-4 border-foreground"
        />

        <motion.h2
          style={{ opacity, x: imageTitleX }}
          className={cn(sanguardRegular.className, "text-9xl")}
        >
          Web App
        </motion.h2>
      </div>
    </div>
  );
}

function BuiltWithNextjsEx3() {
  const MotionImage = motion(Image);
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end 0.9"],
  });

  const imageX = useTransform(scrollYProgress, [0, 1], [-500, 0]);
  const imageTitleX = useTransform(scrollYProgress, [0, 1], [500, -100]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="mx-auto min-h-screen max-w-7xl">
      <div className="flex items-end justify-center">
        <MotionImage
          style={{ opacity, x: imageX }}
          src={"/assets/washington.png"}
          alt=""
          width={800}
          height={400}
          className="border-4 border-foreground"
        />

        <motion.h2
          style={{ opacity, x: imageTitleX }}
          className={cn(sanguardRegular.className, "text-9xl")}
        >
          Media and Blog
        </motion.h2>
      </div>
    </div>
  );
}
