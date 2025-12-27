"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

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
  const [flipCount, setFlipCount] = React.useState(1);
  const tl = gsap.timeline();
  const cardRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div className="perspective-distant">
      {/** biome-ignore lint/a11y/useKeyWithClickEvents: <""> */}
      {/** biome-ignore lint/a11y/noStaticElementInteractions: <""> */}
      <div
        ref={cardRef}
        className="flex h-52 w-40 items-center justify-center rounded-lg border bg-red-500"
        onClick={() => {
          tl.to(cardRef.current, { rotateY: flipCount * 180 });
          setFlipCount((flipCount) => flipCount + 1);
        }}
      >
        <div>hello</div>
        <div>world</div>
      </div>
    </div>
  );
}
