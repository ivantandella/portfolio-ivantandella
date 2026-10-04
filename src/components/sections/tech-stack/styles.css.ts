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
  backgroundColor: BG_DARK,
});

export const flexContainer = style({
  display: "flex",
  flexDirection: "row",
  gap: 16,
  flexWrap: "wrap",
  justifyContent: "center",
  maxWidth: 1440,
  marginLeft: "auto",
  marginRight: "auto",
  paddingLeft: 20,
  paddingRight: 20,
});

export const skillCard = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}33`,
  borderRadius: "14px",
  width: 140,
  height: 130,
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
