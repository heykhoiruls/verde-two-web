import Link from "next/link";
import React from "react";

const Button = ({
  route = "",
  text,
  onClick,
  variant = "primary",
  disabled = false,
}: {
  route?: string | (() => void);
  text?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  variant?: "primary" | "secondary" | "danger" | "ghost";
  disabled?: boolean;
}) => {
  let buttonClassName =
    "bg-primary-app text-white hover:text-white font-bold py-4 px-8 rounded-tl-lg rounded-br-lg transition duration-300 ";

  if (variant === "secondary") {
    buttonClassName =
      "backdrop-filter backdrop-blur-sm bg-opacity-35 bg-black hover:bg-opacity-50 hover:text-white font-bold py-4 px-8 rounded-tl-lg rounded-br-lg transition duration-300";
  }

  if (variant === "ghost") {
    buttonClassName =
      "bg-color hover:bg-primary-app hover:text-white font-bold py-4 px-8 rounded-tl-lg rounded-br-lg transition duration-300";
  }

  if (disabled) {
    buttonClassName += " opacity-50 cursor-not-allowed";
  }

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    if (disabled) {
      event.preventDefault();
      return;
    }
    if (typeof route === "function") {
      event.preventDefault();
      route();
    }
  };

  return (
    <Link href={typeof route === "string" ? route : "#"}>
      <button
        onClick={onClick ? onClick : handleClick}
        className={buttonClassName}
        disabled={disabled}
      >
        {text}
      </button>
    </Link>
  );
};

export default Button;
