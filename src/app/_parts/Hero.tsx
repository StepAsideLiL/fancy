"use client";

import "./Hero.css";
import { sanguardRegular } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CogIcon, Play } from "lucide-react";

export default function Hero() {
  const words = ["Next.js", "Tailwind", "Shadcn/ui", "Motion"];
  const [hover, setHover] = useState(false);

  const variants = {
    initial1: { x: -40 },
    initial2: { x: -80 },
    hover1: { x: 0 },
    hover2: { x: 0 },
  };

  return (
    <section className="hero-background-pattern flex h-full min-h-screen items-center justify-center">
      <div className="px-4 md:px-0">
        <h1
          className={cn(
            "text-6xl uppercase md:text-8xl",
            sanguardRegular.className,
          )}
        >
          <div className="relative w-full">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mx-auto h-20 w-fit text-center"
            >
              Build your
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute -top-2 left-10 md:-top-4 md:left-20"
            >
              <CogIcon className="size-14 md:size-24" />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="block text-center"
          >
            dream project with
          </motion.div>
          <div className="flex items-center justify-end">
            <div
              className="hidden items-center md:flex"
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <motion.span>
                <Play size={100} className="text-cyan-400" />
              </motion.span>
              <motion.span
                variants={variants}
                animate={hover ? "hover1" : "initial1"}
                transition={{ delay: 0.1 }}
              >
                <Play size={100} className="text-cyan-400" />
              </motion.span>
              <motion.span
                variants={variants}
                animate={hover ? "hover2" : "initial2"}
                transition={{ delay: 0 }}
              >
                <Play size={100} className="text-cyan-400" />
              </motion.span>
            </div>
            <TextCycleLoop words={words} />
          </div>
        </h1>
      </div>
    </section>
  );
}

function TextCycleLoop({
  words,
  interval = 2000,
  className = "",
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.6 }}
      className={cn(
        "relative flex h-20 w-[340px] justify-end overflow-hidden",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 80 }}
          animate={{ y: 0 }}
          exit={{ y: -80 }}
          transition={{ duration: 0.5 }}
          className="animated-gradient-text absolute"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </motion.div>
  );
}
