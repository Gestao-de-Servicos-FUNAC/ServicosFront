import * as React from "react";

import { cn } from "@/lib/utils";

const InputError = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"p">
>(({ className, ...props }, ref) => {
  return (
    <p
      className={cn("text-red-600 text-xs md:text-xs", className)}
      ref={ref}
      {...props}
    />
  );
});
InputError.displayName = "InputError";

export { InputError };
