import Link from "next/link";
import { ComponentProps } from "react";

type Props = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export default function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex min-h-12 items-center rounded-xl px-6 text-[15px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-fg";
  const styles =
    variant === "primary"
      ? "bg-fg text-bg hover:bg-white"
      : "border border-border text-fg hover:border-zinc-600";
  return <Link className={`${base} ${styles} ${className}`} {...props} />;
}