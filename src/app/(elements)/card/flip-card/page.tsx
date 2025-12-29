"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const cards = [
  {
    title: "Work",
    img: "https://i.ibb.co.com/n83XpDNm/work.webp",
    message:
      "Work transforms effort into excellence, turning persistence into progress, discipline into mastery, and ordinary days into meaningful achievements for everyone.",
    color: "640D5F",
  },
  {
    title: "Symmetric",
    img: "https://i.ibb.co.com/whPhDd72/symmetric.webp",
    message:
      "Symmetric balance teaches harmony, where equal parts create stability, beauty, and trust, reminding us order can inspire calm confidence within.",
    color: "B12C00",
  },
  {
    title: "Idea",
    img: "https://i.ibb.co.com/gFWWcRnX/idea.webp",
    message:
      "An idea begins quietly, sparks curiosity, challenges limits, grows through belief, and becomes powerful when nurtured with courage and action.",
    color: "EB5B00",
  },
  {
    title: "Future",
    img: "https://i.ibb.co.com/4n1HWRT5/future.webp",
    message:
      "The future rewards visionaries who prepare today, adapt fearlessly, learn continuously, and shape tomorrow with intentional choices and shared purpose.",
    color: "FFCC00",
  },
  {
    title: "Fly",
    img: "https://i.ibb.co.com/B559MtKx/fly.webp",
    message:
      "To fly is to trust growth, release fear, embrace momentum, and rise higher by believing in unseen strength within yourself.",
    color: "B12C00",
  },
  {
    title: "Develop",
    img: "https://i.ibb.co.com/Ld77ZVKN/develop.webp",
    message:
      "Develop means committing to learning, refining skills daily, embracing feedback, and evolving steadily beyond yesterday's limitations with patience and focus.",
    color: "FFCC00",
  },
  {
    title: "Design",
    img: "https://i.ibb.co.com/hFHyfdzM/design.webp",
    message:
      "Design blends creativity and purpose, shaping experiences intentionally, solving problems elegantly, and transforming imagination into practical impact that truly matters.",
    color: "640D5F",
  },
  {
    title: "Climb",
    img: "https://i.ibb.co.com/KzjbZdH5/climb.webp",
    message:
      "Every climb demands resilience, steady steps, and belief, teaching progress comes from persistence, perspective, and courage earned through consistent effort.",
    color: "EB5B00",
  },
];

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <div className="py-10">
        <div className="flex flex-wrap justify-center gap-10 px-10 xl:px-0">
          {cards.map((card) => (
            <FlipCard key={card.title} card={card} />
          ))}
        </div>
      </div>
    </main>
  );
}

function FlipCard({
  card,
}: {
  card: { title: string; img: string; message: string; color: string };
}) {
  const tl = gsap.timeline();
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [flipCount, setFlipCount] = React.useState(1);
  const [currentAnimationTime, setCurrentAnimationTime] = React.useState(0);

  function handleFlip() {
    if (!(currentAnimationTime < 0.5 && currentAnimationTime > 0)) {
      tl.to(cardRef.current, {
        rotateY: flipCount * 180,
        onUpdate: () => {
          setCurrentAnimationTime(tl.time());
          console.log(tl.time());
        },
        onComplete: () => {
          tl.clear();
        },
      });
      setFlipCount((flipCount) => flipCount + 1);
    }
  }

  return (
    <div className="perspective-distant">
      {/** biome-ignore lint/a11y/useKeyWithClickEvents: <""> */}
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <""> */}
      <div
        ref={cardRef}
        className="relative flex size-72 items-center justify-center"
        onMouseDown={(e) => {
          if (e.detail > 1) {
            e.preventDefault();
          }
        }}
        onClick={() => {
          handleFlip();
        }}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full opacity-100 transition-all",
            flipCount % 2 !== 1 && "opacity-0",
          )}
          style={{ transitionDuration: "0.5s" }}
        >
          <div className="relative flex h-full items-center justify-center overflow-clip rounded-lg">
            <Image
              src={card.img}
              alt={card.title}
              width={512}
              height={512}
              className="absolute inset-0 object-cover"
            />
            <div className="absolute inset-0 z-10 h-full w-full bg-foreground/20" />
            <h1
              className="z-20 font-bold text-5xl text-background"
              style={{
                color: `#${card.color}`,
                WebkitTextStroke: "1px #FFDEB9",
              }}
            >
              {card.title}
            </h1>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 h-full w-full rotate-y-180 opacity-0 transition-all",
            flipCount % 2 === 0 && "opacity-100",
          )}
          style={{ transitionDuration: "0.5s" }}
        >
          <div
            className="flex h-full justify-center overflow-clip rounded-lg px-2 pt-5"
            style={{
              backgroundColor: `#${card.color}`,
            }}
          >
            <div className="space-y-5 text-center text-background">
              <h1 className="font-bold text-3xl">{card.title}</h1>
              <p className="text-lg">{card.message}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
