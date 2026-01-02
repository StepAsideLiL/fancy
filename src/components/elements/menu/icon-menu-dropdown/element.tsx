"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLink, Minus, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import { dancingScript } from "@/lib/fonts";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

const menuList = [
  {
    name: "Home",
    href: "#Home",
  },
  {
    name: "About",
    href: "#About",
  },
  {
    name: "Pricing",
    href: "#Pricing",
  },
  {
    name: "Contact",
    href: "#Contact",
  },
  {
    name: "Social",
    href: "#Social",
  },
];

export function Element() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuExist, setMenuExist] = React.useState(false);
  const menuListContainerRef = React.useRef<HTMLUListElement | null>(null);
  const menuListRef = React.useRef<HTMLLIElement[]>([]);

  useGSAP(() => {
    const tl = gsap.timeline();

    if (isMenuOpen) {
      tl.to(
        menuListContainerRef.current,
        {
          height: "auto",
        },
        0,
      );
      menuListRef.current.forEach((ref) => {
        tl.to(
          ref,
          {
            y: 0,
          },
          0,
        );
      });
    } else {
      tl.to(
        menuListContainerRef.current,
        {
          height: 0,
        },
        0,
      );
      menuListRef.current.forEach((ref, i) => {
        tl.to(
          ref,
          {
            y: -80 * (i + 1),
            onComplete: () => {
              if (!menuExist) {
                setMenuExist(false);
              }
            },
          },
          0,
        );
      });
    }
  }, [isMenuOpen]);

  return (
    <div className="relative">
      <header className="absolute w-full border-b bg-background">
        <div className="relative z-10 flex w-full items-center justify-between p-10">
          <div className={cn(dancingScript.className, "text-6xl")}>
            <h1>Fancy</h1>
          </div>

          <div>
            <Button
              variant={"link"}
              size={"icon-lg"}
              className="group relative size-[60] cursor-pointer rounded-full"
              onClick={() => {
                if (!isMenuOpen) {
                  setMenuExist(true);
                }
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <div className="-z-10 -translate-1/2 absolute top-[30] left-[30] size-0 rounded-full bg-foreground transition-all group-hover:size-[60]" />
              <Plus
                className={cn(
                  "-translate-1/2 absolute top-[30] left-[30] size-10 transition-all group-hover:text-background",
                  isMenuOpen ? "rotate-45 opacity-0" : "rotate-0 opacity-100",
                )}
              />
              <Minus
                className={cn(
                  "-translate-1/2 absolute top-[30] left-[30] size-10 transition-all group-hover:text-background",
                  isMenuOpen
                    ? "rotate-180 opacity-100"
                    : "rotate-[135] opacity-0",
                )}
              />
            </Button>
          </div>
        </div>

        {menuExist && (
          <nav>
            <ul
              className="h-0 divide-y overflow-clip bg-background px-10 shadow-foreground/10 shadow-lg"
              ref={menuListContainerRef}
            >
              {menuList.map((menu, i) => (
                <li
                  key={menu.href}
                  ref={(el) => {
                    if (el) {
                      menuListRef.current[i] = el;
                    }
                  }}
                  style={{ translate: `0 ${-80 * (i + 1)}px` }}
                >
                  <Link
                    href={menu.href}
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="font-bold text-4xl opacity-30 transition-opacity duration-300 group-hover:opacity-100">
                      {menu.name}
                    </span>{" "}
                    <ExternalLink className="opacity-30 transition-opacity duration-300 group-hover:scale-150 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>

      <div className="h-40" />

      <main className="px-10">
        <div className="flex items-center justify-between">
          <div></div>
          <div className="flex items-end gap-10">
            <h1 className="font-semibold text-2xl">
              Click the{" "}
              <span>
                <Plus className="inline" />{" "}
                <span className="sr-only">plus icon </span>
              </span>{" "}
              to open this menu
            </h1>
            <div>
              <SVGComponent />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const SVGComponent = (props: React.ComponentPropsWithRef<"svg">) => (
  <svg
    role="img"
    aria-label="Arrow"
    width="100%"
    height="100%"
    viewBox="0 0 139 153"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      fillRule: "evenodd",
      clipRule: "evenodd",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      strokeMiterlimit: 1.5,
    }}
    {...props}
    className=""
  >
    <path
      d="M1,145.151c17.835,0 77.079,9.933 73.327,-22.834c-4.755,-41.524 -46.798,-27.51 -40.739,6.551c1.033,5.809 14.642,18.443 18.869,19.5c0.024,0.006 8.731,3.182 28.301,2.573c22.545,-0.701 27.492,-15.634 38.915,-53.709c9.399,-31.33 4.824,-49.057 4.824,-85.548"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 2,
      }}
    />
    <path
      d="M114.718,24.498c0.307,-6.137 1.044,-5.931 2.964,-11.691c1.971,-5.912 5.815,-15.705 10.255,-10.17c0.114,0.142 5.028,5.334 7.364,10.005c1.675,3.35 1.081,3.447 1.811,8.562"
      style={{
        fill: "none",
        stroke: "#000",
        strokeWidth: 2,
      }}
    />
  </svg>
);
