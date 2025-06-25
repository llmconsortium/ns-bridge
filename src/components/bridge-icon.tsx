import * as React from "react";
import { cn } from "@/lib/utils";

export const BridgeIcon = React.forwardRef<SVGSVGElement, React.SVGProps<SVGSVGElement>>(
  ({ className, ...props }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={cn(className)}
      {...props}
    >
      <path d="M2 9h20v2H2z" />
      <path d="M5 11v5h2v-5zM11 11v5h2v-5zM17 11v5h2v-5z" />
    </svg>
  )
);
BridgeIcon.displayName = "BridgeIcon";
