import type { ComponentPropsWithoutRef } from "react";

type BrandMarkProps = Omit<ComponentPropsWithoutRef<"svg">, "strokeWidth"> & {
  strokeWidth?: number;
};

export function BrandMark({ className, strokeWidth = 56, ...props }: BrandMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      data-brand-mark
      fill="none"
      focusable="false"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
      viewBox="200 150 600 700"
      {...props}
    >
      <path d="M500 190 240 790 500 610 760 790Z" />
      <path d="M500 280v530" />
      <path d="m410 680 90 130 90-130" />
    </svg>
  );
}
