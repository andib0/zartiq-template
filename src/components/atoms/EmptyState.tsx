import React, { ReactNode } from "react";
import { FiDatabase, FiInbox, FiPackage, FiSearch } from "react-icons/fi";
type BuiltInIconType = "data" | "inbox" | "package" | "search";
interface EmptyStateProps {
  title?: string;
  message?: string | ReactNode;
  icon?: ReactNode | BuiltInIconType;
  action?: ReactNode;
  className?: string;
  iconClassName?: string;
  titleClassName?: string;
  messageClassName?: string;
  actionClassName?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  message = "No data available.",
  icon,
  action,
  className = "",
  iconClassName = "mb-4 h-16 w-16 text-indigo-600",
  titleClassName = "text-lg font-medium text-gray-900 mb-1",
  messageClassName = "text-gray-500 text-center",
  actionClassName = "mt-4",
}) => {
  const selectedIcon = (icon: ReactNode | BuiltInIconType) => {
    if (typeof icon === "string") {
      switch (icon) {
        case "data":
          return <FiDatabase className={iconClassName} />;
        case "inbox":
          return <FiInbox className={iconClassName} />;
        case "package":
          return <FiPackage className={iconClassName} />;
        case "search":
          return <FiSearch className={iconClassName} />;
        default:
          return <FiDatabase className={iconClassName} />;
      }
    } else {
      return icon;
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 ${className}`}
      data-testid="empty-state"
    >
      {icon && <div className={iconClassName}>{selectedIcon(icon)}</div>}
      {title && <h3 className={titleClassName}>{title}</h3>}
      <p className={messageClassName}>{message}</p>
      {action && <div className={actionClassName}>{action}</div>}
    </div>
  );
};
