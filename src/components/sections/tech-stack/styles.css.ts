import { style } from "@vanilla-extract/css";
import {
  BG_DARK,
  CARD_BG,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "@/constants/colors";

export const sectionWrapper = style({
  paddingTop: 60,
  paddingBottom: 80,
});

export const flexContainer = style({
  display: "grid",
  gap: 16,
  maxWidth: 1000,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 20,
  paddingRight: 20,

  // Mobile: 2 columns
  gridTemplateColumns: "repeat(2, 1fr)",

  "@media": {
    // Tablet: 3 columns (9 items → 3 + 3 + 3)
    "screen and (min-width: 640px)": {
      gridTemplateColumns: "repeat(3, 1fr)",
    },
    // Desktop: 5 columns
    "screen and (min-width: 1024px)": {
      gridTemplateColumns: "repeat(5, 1fr)",
    },
  },
});

export const skillCard = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}33`,
  borderRadius: "14px",
  width: "100%", // fill the grid cell instead of fixed 140
  minHeight: 130,
  padding: 16,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  cursor: "pointer",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      borderColor: `${ACCENT_CYAN}88`,
      boxShadow: `0 8px 30px ${BG_DARK}bb, 0 0 15px ${ACCENT_CYAN}22`,
      transform: "translateY(-2px)",
    },
  },
});

export const skillIconImg = style({
  width: 48,
  height: 48,
  objectFit: "contain",
  filter: "drop-shadow(0 2px 8px rgba(0, 0, 0, 0.3))",
});

export const skillTitleText = style({
  fontSize: "14px",
  fontWeight: 600,
  color: TEXT_WHITE,
  textAlign: "center",
});
