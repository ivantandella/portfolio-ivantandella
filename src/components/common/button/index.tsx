import React from "react";
import { btnBase, primaryVariant, secondaryVariant, fullWidthStyle, iconSlot } from "./styles.css";

type ButtonVariant = "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: () => void;
  children: React.ReactNode;
  leftIcon?: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
};

function getVariantClass(variant: ButtonVariant) {
  return variant === "primary" ? primaryVariant : secondaryVariant;
}

export default function Button({
  variant = "primary",
  href,
  target,
  rel,
  onClick,
  children,
  leftIcon,
  fullWidth = false,
  className = "",
  type = "button",
}: ButtonProps) {
  const classes = [
    btnBase,
    getVariantClass(variant),
    fullWidth ? fullWidthStyle : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {leftIcon && <span className={iconSlot}>{leftIcon}</span>}
      <span>{children}</span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? (rel ?? "noopener noreferrer") : rel}
        onClick={onClick}
        className={classes}
      >
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
