import type { FC } from "react";
import React from "react";

interface LinkButtonProps {
  to: string;
  children: React.ReactNode;
}

const LinkButton: FC<LinkButtonProps> = ({ to, children, ...props }) => {
  return (
    <a href={to}>
      <button
        className="primary-gradient sm:text-md flex items-center gap-1 rounded-full py-2 px-5 text-sm outline-primary transition-all hover:scale-105 hover:font-medium hover:opacity-90"
        {...props}
      >
        {children}
      </button>
    </a>
  );
};

export default LinkButton;
