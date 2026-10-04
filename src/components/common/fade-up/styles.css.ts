import { style } from "@vanilla-extract/css";

export const fadeUpBase = style({
  opacity: 0,
  transform: "translateY(32px)",
  transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "opacity, transform",
});

export const fadeUpVisible = style({
  opacity: 1,
  transform: "translateY(0)",
});
