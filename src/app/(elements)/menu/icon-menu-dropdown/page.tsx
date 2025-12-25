"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ExternalLink, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";

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

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [menuExist, setMenuExist] = React.useState(true);
  const tl = gsap.timeline();
  const menuContainerRef = React.useRef<HTMLElement | null>(null);
  const menuListRef = React.useRef<HTMLLIElement[]>([]);

  useGSAP(() => {
    if (isMenuOpen) {
      tl.to(menuContainerRef.current, {
        height: "auto",
      });
    } else {
      tl.to(menuContainerRef.current, {
        height: 0,
      });
    }
  }, [isMenuOpen]);

  return (
    <div>
      <header className="border-b">
        <div className="relative z-10 flex w-full items-center justify-between p-10">
          <div>
            <h1>Fancy</h1>
          </div>

          <div>
            <Button
              variant={"outline"}
              className="cursor-pointer"
              onClick={() => {
                setIsMenuOpen((isMenuOpen) => !isMenuOpen);
              }}
            >
              <Plus />
            </Button>
          </div>
        </div>

        {menuExist && (
          <nav
            className="h-0 overflow-clip bg-background px-10 shadow-foreground/50 shadow-lg"
            ref={menuContainerRef}
          >
            <ul className="divide-y">
              {menuList.map((menu, i) => (
                <li
                  key={menu.href}
                  ref={(el) => {
                    if (el) {
                      menuListRef.current[i] = el;
                    }
                  }}
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

      <main>
        <h1>Look at this menu</h1>
      </main>
    </div>
  );
}
