/* eslint-disable */
/* This file is auto-generated. Do not edit manually. */

import type { ComponentType } from "react";

export type TElement = {
  name: string;
  description: string;
  slug: string;
  category: string;
  url: string;
  content: string;
  tags: string[];
  element: ComponentType;
};

import { Element as Element0 } from "../components/elements/card/flip-card/element";
import { Element as Element1 } from "../components/elements/menu/dropdown-menu-icon-animation/element";

export const elements: TElement[] = [
{
  name: "Flip Card",
  description: "3d card flip with face and back side.",
  slug: "flip-card",
  category: "card",
  url: "/e/card/flip-card",
  content: "## Introduction\r\n\r\nA flip card is a perfect design pattern for hiding redundant information while keeping it accessible with a click.\r\n",
  tags: ["card","flip","3d","rotate","gsap"],
  element: Element0,
},
{
  name: "Dropdown Menu Icon Animation",
  description: "Rotating icon animation for dropdown menu trigger.",
  slug: "dropdown-menu-icon-animation",
  category: "menu",
  url: "/e/menu/dropdown-menu-icon-animation",
  content: "## Introduction\r\n\r\nA dropdown menu is an important aspect of responsive web design. So, animating the transition between the open and closed states of a dropdown menu trigger icon is a nice touch. This is an example of a rotating animation for a menu icon.\r\n",
  tags: ["icon animation","rotate","dropdown","menu","gsap"],
  element: Element1,
}
];
