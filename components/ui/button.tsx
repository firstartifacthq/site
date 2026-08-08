import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-6 text-sm font-semibold uppercase tracking-[0.08em] transition-[background,color,transform,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-current focus-visible:ring-offset-4 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary: "bg-[hsl(var(--foreground))] text-[hsl(var(--background))] hover:bg-white/88",
        red: "bg-[hsl(var(--signal))] text-white hover:bg-[hsl(var(--signal-deep))]",
        outline: "border border-current bg-transparent hover:bg-current/8",
        line: "border border-current bg-transparent text-current hover:bg-white/10",
      },
      size: {
        default: "min-h-12 px-6",
        wide: "min-h-14 w-full px-8 md:min-h-16",
        compact: "min-h-10 px-4 text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { buttonVariants };
