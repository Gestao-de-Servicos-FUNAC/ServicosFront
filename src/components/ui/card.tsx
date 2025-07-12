import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

export const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={twMerge(
        "rounded-2xl shadow-md bg-white dark:bg-darkgray p-6",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

export const CardContent = ({ className, children }: CardContentProps) => {
  return <div className={twMerge("space-y-2", className)}>{children}</div>;
};
