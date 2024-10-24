import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  iconClassName?: string;
  variant: "light" | "dark";
}

function Input({
  icon,
  className,
  iconClassName,
  variant,
  ...rest
}: Readonly<InputProps>) {
  const colorClasses =
    variant === "dark"
      ? "bg-neutral-700 border border-neutral-700 focus:ring-purple-700 focus:border-purple-700 "
      : "bg-white text-neutral-900 border border-neutral-700 focus:ring-purple-700 focus:border-purple-700 ";

  if (icon) {
    return (
      <div className="h-12 relative">
        <div className={"absolute left-6 top-3 " + iconClassName}>{icon}</div>
        <input
          className={
            "h-full rounded-2xl pl-16 py-3 px-3 " +
            colorClasses +
            (className ?? "")
          }
          {...rest}
        />
      </div>
    );
  }

  return (
    <div className="h-12">
      <input
        className={
          "h-full rounded-2xl py-3 px-5 " + colorClasses + (className ?? "")
        }
        {...rest}
      />
    </div>
  );
}

export default Input;
