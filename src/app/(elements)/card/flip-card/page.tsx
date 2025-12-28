"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

export default function Page() {
  return (
    <main className="mx-auto w-full max-w-7xl">
      <div className="py-10">
        <FlipCard />
      </div>
    </main>
  );
}

function FlipCard() {
  const tl = gsap.timeline();
  const cardRef = React.useRef<HTMLDivElement | null>(null);
  const [flipCount, setFlipCount] = React.useState(1);
  const [currentAnimationTime, setCurrentAnimationTime] = React.useState(0);

  return (
    <div className="perspective-distant">
      {/** biome-ignore lint/a11y/useKeyWithClickEvents: <""> */}
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <""> */}
      <div
        ref={cardRef}
        className="relative flex h-52 w-40 items-center justify-center rounded-lg border bg-red-500"
        onMouseDown={(e) => {
          if (e.detail > 1) {
            e.preventDefault();
          }
        }}
        onClick={() => {
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
        }}
      >
        <div
          className={cn(
            "absolute inset-0 h-full w-full opacity-100 transition-all",
            flipCount % 2 !== 1 && "opacity-0",
          )}
          style={{ transitionDuration: "0.5s" }}
        >
          <div className="flex h-full items-center justify-center">
            <h1>hello</h1>
          </div>
        </div>

        <div
          className={cn(
            "absolute inset-0 h-full w-full rotate-y-180 opacity-0 transition-all",
            flipCount % 2 === 0 && "opacity-100",
          )}
          style={{ transitionDuration: "0.5s" }}
        >
          <div className="flex h-full items-center justify-center">
            <h1>world</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
