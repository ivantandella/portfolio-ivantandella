import { style } from "@vanilla-extract/css";
import { BG_DARK, CARD_BG, ACCENT_CYAN, ACCENT_GRAY, TEXT_WHITE } from "@/constants/colors";

export const cardContainer = style({
  backgroundColor: CARD_BG,
  border: `1px solid ${ACCENT_GRAY}33`,
  borderRadius: 16,
  padding: 24,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  height: "100%",
  transition: "all 0.3s ease",
  selectors: {
    "&:hover": {
      borderColor: `${ACCENT_CYAN}66`,
      boxShadow: `0 12px 30px rgba(0,0,0,0.4), 0 0 20px ${ACCENT_CYAN}18`,
      transform: "translateY(-3px)",
    },
  },
});

export const mockupLaptop = style({
  backgroundColor: "#09111e",
  borderRadius: 12,
  border: `1px solid ${ACCENT_GRAY}44`,
  overflow: "hidden",
  width: "100%",
  marginBottom: 20,
  boxShadow: "0 10px 25px rgba(0, 0, 0, 0.4)",
});

export const mockupTopBar = style({
  backgroundColor: "#132033",
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  gap: 6,
  borderBottom: `1px solid ${ACCENT_GRAY}22`,
});

export const mockupUrlText = style({
  marginLeft: "auto",
  marginRight: "auto",
  fontSize: 11,
  color: ACCENT_GRAY,
  opacity: 0.7,
  fontFamily: "monospace",
});

export const dotRed = style({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "#ff5f56",
  flexShrink: 0,
});

export const dotYellow = style({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "#ffbd2e",
  flexShrink: 0,
});

export const dotGreen = style({
  width: 10,
  height: 10,
  borderRadius: "50%",
  backgroundColor: "#27c93f",
  flexShrink: 0,
});

export const imageViewport = style({
  height: 220,
  backgroundColor: BG_DARK,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
});

export const projectImgWeb = style({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

export const projectImgMobile = style({
  width: "auto",
  height: "90%",
  objectFit: "contain",
  borderRadius: 8,
});

export const projectTitle = style({
  fontSize: 20,
  fontWeight: 700,
  color: TEXT_WHITE,
});

export const projectDescription = style({
  fontSize: 14,
  color: ACCENT_GRAY,
  marginTop: 8,
  lineHeight: 1.55,
});

export const badgeGroup = style({
  display: "flex",
  flexWrap: "wrap",
  gap: 6,
  marginTop: 14,
});

export const techPill = style({
  backgroundColor: "rgba(13, 24, 42, 0.8)",
  border: `1px solid ${ACCENT_GRAY}44`,
  borderRadius: 6,
  padding: "3px 10px",
  fontSize: 11,
  fontWeight: 500,
  color: ACCENT_GRAY,
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: `${ACCENT_CYAN}88`,
      color: ACCENT_CYAN,
    },
  },
});

export const buttonFlex = style({
  display: "flex",
  gap: 10,
  marginTop: 16,
});

export const btnHalf = style({
  flex: 1,
  minWidth: 0,
});
