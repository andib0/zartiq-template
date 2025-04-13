import React from "react";

interface LoadingProps {
  size?: "sm" | "md" | "lg";
  color?: string;
  className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
  size = "md",
  color = "blue-500",
  className = "",
}) => {
  const sizeClasses = {
    sm: "h-6 w-6 border-t-1 border-b-1",
    md: "h-10 w-10 border-t-2 border-b-2",
    lg: "h-16 w-16 border-t-4 border-b-4",
  };

  return (
    <div
      className={`flex items-center justify-center p-4 ${className}`}
      role="status"
      aria-label="Loading"
    >
      <div
        className={`animate-spin  rounded-full ${sizeClasses[size]} border-${color}`}
      />
      <span className="sr-only">Loading...</span>
    </div>
  );
};
