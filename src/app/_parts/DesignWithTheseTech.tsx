"use client";

import { techs } from "@/lib/constent";
import { motion } from "motion/react";

export default function DesignWithTheseTech() {
  return (
    <section className="container mx-auto flex h-96 max-w-3xl flex-col items-center justify-center gap-10 px-5 md:px-0">
      <WordSlide>Here are some amazing design with these techs</WordSlide>

      <div className="flex items-center justify-center gap-10">
        {techs.map((tech) => (
          <motion.span
            key={tech.href}
            initial={{ y: 0, scale: 1 }}
            whileHover={{ y: -10, scale: 1.5 }}
          >
            <tech.icon size={40} />
          </motion.span>
        ))}
      </div>
    </section>
  );
}

function WordSlide({ children }: { children: string }) {
  const words = children.toString().split(" ");

  return (
    <h1 className="text-center font-mono text-3xl font-bold uppercase md:text-5xl">
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {word}&nbsp;
        </motion.span>
      ))}
    </h1>
  );
}
