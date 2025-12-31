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

type Listener = (message: string | null) => void;

let listener: Listener | null = null;

const cursorMessage = {
  show(message: string) {
    listener?.(message);
  },
  hide() {
    listener?.(null);
  },
  _subscribe(fn: Listener) {
    listener = fn;
    return () => {
      listener = null;
    };
  },
};

export default function Page() {
  React.useEffect(() => {
    document.body.style.cursor = "none";
  });
  // console.log(metadata);

  return (
    <main className="mx-auto w-full max-w-7xl">
      <Cursor />

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
        onMouseEnter={() => cursorMessage.show("Click")}
        onMouseLeave={cursorMessage.hide}
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
              loading="eager"
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

function Cursor() {
  const cursorRef = React.useRef<HTMLDivElement>(null);
  const bubbleRef = React.useRef<HTMLDivElement>(null);

  const mouse = React.useRef({ x: 0, y: 0 });
  const raf = React.useRef<number | null>(null);
  const message = React.useRef<string | null>(null);

  const visible = React.useRef(false);

  React.useEffect(() => {
    document.body.style.cursor = "none";

    const unsub = cursorMessage._subscribe((msg) => {
      message.current = msg;

      if (bubbleRef.current) {
        bubbleRef.current.textContent = msg ?? "";
        bubbleRef.current.classList.toggle("opacity-0", !msg);
      }
    });

    const move = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      if (!visible.current) {
        visible.current = true;
        cursorRef.current?.classList.remove("opacity-0");
      }
    };

    const hide = () => {
      visible.current = false;
      cursorRef.current?.classList.add("opacity-0");
    };

    const render = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
        if (bubbleRef.current) {
          bubbleRef.current.style.transform = `translate3d(${mouse.current.x}px, ${mouse.current.y}px, 0)`;
        }
      }

      raf.current = requestAnimationFrame(render);
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (e.relatedTarget === null) hide();
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseout", handleMouseOut);
    window.addEventListener("blur", hide);
    window.addEventListener("focus", () => {
      visible.current = true;
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) hide();
    });

    raf.current = requestAnimationFrame(render);

    return () => {
      unsub();
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseout", handleMouseOut);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", hide);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="-translate-x-1/2 -translate-y-1/2 pointer-events-none fixed top-0 left-0 z-9999"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={28}
          height={28}
          viewBox="0 0 14 14"
        >
          <title>Cursor</title>
          <g fill="none">
            <path
              fill="#d7e0ff"
              d="M13.246 4.973c0-1.126-10.832-5.333-12.222-3.945C-.362 2.413 3.902 13.25 5.02 13.25c1.303 0 2.068-4.965 2.377-5.854c.886-.313 5.849-1.115 5.849-2.423"
            ></path>
            <path
              stroke="#4147d5"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.246 4.973c0-1.126-10.832-5.333-12.222-3.945C-.362 2.413 3.902 13.25 5.02 13.25c1.303 0 2.068-4.965 2.377-5.854c.886-.313 5.849-1.115 5.849-2.423"
              strokeWidth={1}
            ></path>
          </g>
        </svg>
      </div>

      {/* Message Bubble */}
      <div
        ref={bubbleRef}
        className="-translate-x-1/2 -translate-y-1/2 pointer-events-none fixed top-0 left-0 z-9999 flex size-20 items-center justify-center rounded-full bg-amber-200 opacity-0 transition-all duration-150 ease-out"
      />
    </>
  );
}
