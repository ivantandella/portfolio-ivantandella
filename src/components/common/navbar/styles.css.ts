import { style } from "@vanilla-extract/css";
import {
  BG_DARK,
  ACCENT_CYAN,
  ACCENT_GRAY,
  TEXT_WHITE,
} from "@/constants/colors";

// Use rgba for bg on both states so the transition is purely opacity, no flash
const BG_DARK_SOLID = "rgba(13, 24, 42, 1)";
const BG_DARK_GLASS = "rgba(13, 24, 42, 0.7)";

export const headerBase = style({
  position: "fixed",
  left: 0,
  right: 0,
  zIndex: 999,
  // Transition all relevant props individually for predictable animation
  transition:
    "top 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), margin 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-radius 0.35s cubic-bezier(0.4, 0, 0.2, 1), background-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.35s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.35s cubic-bezier(0.4, 0, 0.2, 1)",
});

// Flat header when at top of page
export const headerFlat = style({
  top: 0,
  width: "100%",
  maxWidth: "100%",
  marginLeft: 0,
  marginRight: 0,
  backgroundColor: BG_DARK_SOLID,
  // Use border (not borderBottom) so all 4 sides exist in both states, only color changes
  border: `1px solid rgba(0, 216, 245, 0)`,
  backdropFilter: "none",
  WebkitBackdropFilter: "none",
  borderRadius: 0,
  boxShadow: "none",
});

// Floating pill when scrolled
export const headerPill = style({
  top: 16,
  width: "calc(100% - 48px)",
  maxWidth: 1100,
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: BG_DARK_GLASS,
  backdropFilter: "blur(20px) saturate(180%)",
  WebkitBackdropFilter: "blur(20px) saturate(180%)",
  border: `1px solid rgba(0, 216, 245, 0.3)`,
  borderRadius: 32,
  boxShadow: `0 8px 32px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 216, 245, 0.12)`,
});

// When mobile menu is open on a scrolled (pill) header — expands to rounded rect
export const headerPillOpen = style({
  border: `1px solid rgba(0, 216, 245, 0.45)`,
  boxShadow: `0 12px 40px rgba(0, 0, 0, 0.6), 0 0 30px rgba(0, 216, 245, 0.2)`,
});

// When mobile menu is open on flat (top) header
export const headerFlatOpen = style({
  borderBottom: `1px solid rgba(0, 216, 245, 0.2)`,
});

export const innerFlex = style({
  height: 64,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  paddingLeft: 24,
  paddingRight: 24,
});

export const logo = style({
  fontSize: "17px",
  fontWeight: 800,
  letterSpacing: "0.5px",
  color: TEXT_WHITE,
  userSelect: "none",
});

export const logoDot = style({
  color: ACCENT_CYAN,
});

export const desktopNav = style({
  display: "flex",
  alignItems: "center",
  gap: 4,
  backgroundColor: "rgba(24, 38, 56, 0.7)",
  padding: "4px",
  borderRadius: 9999,
  border: `1px solid rgba(119, 128, 169, 0.15)`,
});

export const navItem = style({
  color: ACCENT_GRAY,
  fontWeight: 600,
  fontSize: "13px",
  letterSpacing: "0.3px",
  padding: "7px 16px",
  borderRadius: 9999,
  textDecoration: "none",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      color: TEXT_WHITE,
      backgroundColor: "rgba(0, 216, 245, 0.1)",
    },
    "&.active": {
      color: BG_DARK,
      backgroundColor: ACCENT_CYAN,
      fontWeight: 700,
      boxShadow: `0 0 12px ${ACCENT_CYAN}66`,
    },
  },
});

export const burgerWrapper = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 36,
  height: 36,
  borderRadius: 8,
  border: `1px solid rgba(119, 128, 169, 0.25)`,
  cursor: "pointer",
  backgroundColor: "transparent",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      borderColor: `rgba(0, 216, 245, 0.4)`,
      backgroundColor: "rgba(0, 216, 245, 0.08)",
    },
  },
});

// Mobile dropdown container — always rendered, height animates via max-height
export const mobileMenuWrapper = style({
  overflow: "hidden",
  maxHeight: 0,
  opacity: 0,
  transition:
    "max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.25s ease",
});

export const mobileMenuWrapperOpen = style({
  maxHeight: 400,
  opacity: 1,
});

export const mobileMenuInner = style({
  padding: "12px 16px 20px",
  display: "flex",
  flexDirection: "column",
  gap: 4,
  borderTop: `1px solid rgba(0, 216, 245, 0.15)`,
});

export const mobileNavItem = style({
  color: ACCENT_GRAY,
  fontWeight: 600,
  fontSize: "15px",
  padding: "11px 16px",
  borderRadius: 12,
  textDecoration: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  transition: "all 0.2s ease",
  selectors: {
    "&:hover": {
      backgroundColor: "rgba(0, 216, 245, 0.1)",
      color: TEXT_WHITE,
    },
    "&.active": {
      backgroundColor: ACCENT_CYAN,
      color: BG_DARK,
      fontWeight: 700,
    },
  },
});
