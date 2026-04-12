import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-white/10 bg-panel/80 p-6 shadow-soft backdrop-blur",
        className
      )}
      {...props}
    />
  );
}
