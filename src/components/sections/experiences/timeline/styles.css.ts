import { style } from "@vanilla-extract/css";
import {
  BG_DARK,
  CARD_BG,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "@/constants/colors";

export const timelineContainer = style({
  maxWidth: 1440,
  margin: "0 auto",
  padding: "0 20px",
});

export const bulletIcon = style({
  width: 36,
  height: 36,
  borderRadius: "50%",
  backgroundColor: CARD_BG,
  border: `2px solid ${ACCENT_CYAN}`,
  boxShadow: `0 0 10px ${ACCENT_CYAN}66`,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const bulletImage = style({
  width: 22,
  height: 22,
  objectFit: "contain",
});

export const cardWrapper = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}33`,
  borderRadius: "14px",
  padding: "24px",
  marginLeft: 16,
  marginBottom: 24,
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      borderColor: `${ACCENT_CYAN}88`,
      boxShadow: `0 8px 30px ${BG_DARK}bb, 0 0 15px ${ACCENT_CYAN}22`,
      transform: "translateY(-2px)",
    },
  },
});

export const headerRow = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  flexWrap: "wrap",
  gap: "8px",
});

export const positionTitle = style({
  fontSize: "20px",
  fontWeight: 700,
  color: TEXT_WHITE,
});

export const companyName = style({
  fontSize: "14px",
  fontWeight: 600,
  color: ACCENT_CYAN,
  marginTop: 2,
});

export const dateBadge = style({
  fontSize: "12px",
  fontWeight: 500,
  color: ACCENT_GRAY,
  backgroundColor: "rgba(119, 128, 169, 0.15)",
  padding: "4px 12px",
  borderRadius: "12px",
});

export const descriptionContent = style({
  color: "#c3c7db",
  fontSize: "14px",
  lineHeight: "1.6",
  textAlign: "justify",
});
