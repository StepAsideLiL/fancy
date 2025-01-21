"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import icons from "@/lib/icons";
import Link from "next/link";
import { motion } from "motion/react";

const techs = [
  {
    title: "Next.js",
    description: "The React Framework.",
    icon: icons.Nextjs,
    version: "v15",
    href: "https://nextjs.org/",
  },
  {
    title: "Tailwind CSS",
    description: "The Utility-First CSS Framework.",
    icon: icons.Tailwind,
    version: "v3",
    href: "https://tailwindcss.com/",
  },
  {
    title: "Shadcn UI",
    description: "Beautifully designed components.",
    icon: icons.Shadcn,
    version: "v2",
    href: "https://ui.shadcn.com/",
  },
  {
    title: "Motion",
    description: "A modern animation library for React.",
    icon: icons.Motion,
    version: "v11",
    href: "https://motion.dev/",
  },
];

const AnimateCard = motion.create(Card);

export default function TechnologiesDescription() {
  return (
    <section className="container mx-auto max-w-3xl space-y-4 p-10 py-20 md:px-0">
      <div>
        <motion.h2
          className="font-mono text-4xl font-bold"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          // viewport={{ once: true }}
        >
          Technologies
        </motion.h2>
        <motion.p
          className="text-muted-foreground"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          // viewport={{ once: true }}
        >
          Technologies is the most important part of any project.
        </motion.p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
        {techs.map((tech, index) => (
          <AnimateCard
            key={tech.href}
            className="flex flex-col"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
            // viewport={{ once: true }}
          >
            <CardHeader className="flex-row items-center justify-end gap-2">
              <Badge
                variant={"secondary"}
                className="w-10 justify-center text-muted-foreground"
              >
                {tech.version}
              </Badge>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col items-center justify-center gap-1">
              <tech.icon size={40} />
              <CardTitle className="text-2xl">{tech.title}</CardTitle>
              <p className="text-muted-foreground">{tech.description}</p>
            </CardContent>

            <CardFooter>
              <Button variant={"secondary"} className="w-full" asChild>
                <Link href={tech.href}>Go To {tech.title}</Link>
              </Button>
            </CardFooter>
          </AnimateCard>
        ))}
      </div>
    </section>
  );
}
