import { style } from "@vanilla-extract/css";
import { ACCENT_CYAN, ACCENT_GRAY, TEXT_WHITE } from "@/constants/colors";

export const sectionWrapper = style({
  paddingTop: 80,
  paddingBottom: 100,
  borderTop: `1px solid rgba(119, 128, 169, 0.15)`,
});

export const contentContainer = style({
  maxWidth: 1440,
  margin: "0 auto",
  padding: "0 20px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
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
  color: TEXT_WHITE,
  fontSize: "44px",
  fontWeight: 800,
  marginBottom: "16px",
  lineHeight: 1.2,
});

export const descriptionText = style({
  color: ACCENT_GRAY,
  fontSize: "16px",
  maxWidth: 500,
  marginBottom: 32,
});

export const buttonGroup = style({
  display: "flex",
  gap: 16,
  justifyContent: "center",
  flexWrap: "wrap",
});

export const copyrightText = style({
  color: ACCENT_GRAY,
  fontSize: "12px",
  marginTop: 60,
  opacity: 0.6,
});
