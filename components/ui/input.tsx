import * as React from "react";

import { cn } from "@/lib/utils";

export function Input({ className, type = "text", ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "min-h-12 w-full border border-black/24 bg-white px-4 py-3 text-base text-black outline-none transition-[border-color,box-shadow] placeholder:text-black/48 focus-visible:border-black focus-visible:ring-2 focus-visible:ring-black/18 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-[hsl(var(--signal))] aria-invalid:ring-2 aria-invalid:ring-red-600/15",
        className,
      )}
      {...props}
    />
  );
}
