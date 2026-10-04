import { style } from "@vanilla-extract/css";
import { ACCENT_CYAN, TEXT_WHITE } from "@/constants/colors";

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginBottom: 44,
});

export const subtitleText = style({
  fontSize: "12px",
  fontWeight: 700,
  color: ACCENT_CYAN,
  letterSpacing: "2.5px",
  textTransform: "uppercase",
  marginBottom: 6,
});

export const titleText = style({
  fontSize: "32px",
  fontWeight: 800,
  color: TEXT_WHITE,
  textAlign: "center",
  letterSpacing: "-0.5px",
});
