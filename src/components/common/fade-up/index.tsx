import React from "react";
import { useInView } from "react-intersection-observer";
import { fadeUpBase, fadeUpVisible } from "./styles.css";

type FadeUpProps = {
  children: React.ReactNode;
  delay?: number;
  threshold?: number;
  className?: string;
};

export default function FadeUp({
  children,
  delay = 0,
  threshold = 0.15,
  className = "",
}: FadeUpProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold,
  });

  return (
    <div
      ref={ref}
      className={`${fadeUpBase} ${inView ? fadeUpVisible : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
