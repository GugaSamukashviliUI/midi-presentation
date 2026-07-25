"use client";

import { motion } from "framer-motion";
import { revealContainer, revealItem } from "./motion";

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={revealContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0 }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  style,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
}) {
  return (
    <motion.div variants={revealItem} className={className} style={style} onClick={onClick}>
      {children}
    </motion.div>
  );
}
