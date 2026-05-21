import type { ReactNode } from "react";

interface CardProps {
  title?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

function Card({ title, action, children, className = "" }: CardProps) {
  return (
    <div className={`rounded-lg bg-tertiary shadow-sm ${className}`}>
      {(title || action) && (
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          {title && (
            <h2 className="text-base font-semibold text-secondary">{title}</h2>
          )}
          {action}
        </div>
      )}
      <div className="px-5 py-4">{children}</div>
    </div>
  );
}

export default Card;
