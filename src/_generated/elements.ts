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
  element: ComponentType;
};

import { Element as Element0 } from "../components/elements/card/flip-card/element";
import { Element as Element1 } from "../components/elements/menu/icon-menu-dropdown/element";

export const elements: TElement[] = [
{
  name: "Flip Card",
  description: "3d card flip with face and back side.",
  slug: "flip-card",
  category: "card",
  url: "/e/card/flip-card",
  content: "## Hello\r\n",
  element: Element0,
},
{
  name: "Icon Menu Dropdown",
  description: "The dropdown trigger icon button changes by rotating.",
  slug: "icon-menu-dropdown",
  category: "menu",
  url: "/e/menu/icon-menu-dropdown",
  content: "## Hello new",
  element: Element1,
}
];
