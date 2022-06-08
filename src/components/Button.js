import Link from "next/link";
import React from "react";
import { FeatherIcon } from "../styles";
import Loader from "./Loader";

const Button = ({
  children,
  className = "",
  themeColor,
  textColor,
  link = "",
  loading = false,
  disabled = false,
  onClick = () => {},
  htmlType = "button",
  icon = "",
}) => {
  const Wrapper = ({ children }) =>
    link ? <Link href={link}>{children}</Link> : <>{children}</>;

  return (
    <Wrapper>
      <button
        type={loading || disabled ? "button" : htmlType}
        onClick={loading || disabled ? () => {} : onClick}
        className={`${className} w-full flex items-center justify-center font-medium relative ${
          themeColor ? "bg-[" + themeColor + "]" : "bg-themeColor"
        } ${
          textColor ?? "text-white"
        } px-8 h-[48px] uppercase outline-none hover:bg-[${
          themeColor ?? "#d83661"
        }] ${loading || disabled ? "opacity-[0.45]" : "opacity-100"} ${
          disabled
            ? "cursor-not-allowed"
            : loading
            ? "cursor-progress"
            : "cursor-pointer"
        }`}
      >
        {icon && !loading && (
          <FeatherIcon size={18} className="mr-3" icon={icon} />
        )}
        {loading && (
          <Loader size="small" color="#ffffff" className="absolute left-1/4" />
        )}
        {children}
      </button>
    </Wrapper>
  );
};

export default Button;
