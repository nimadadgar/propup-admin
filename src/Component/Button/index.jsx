import React from "react";
import { ClipLoader } from "react-spinners";

const Div = ({ children, ...rest }) => (
  <div {...rest}>
    <span>{children}</span>
  </div>
);
const Button = ({
  as = "div",
  justLoading = false,
  noOpacityOnDisable = false,
  contentClassName = "",
  onClick = () => {},
  variant = "filledPrimary",
  progress = 0,
  small = false,
  disabled = false,
  loading = false,
  children,
  className = "",
  rightIcon = null,
  leftIcon = null,
  ...rest
}) => {
  const _class = [];
  const variantStyles = {
    filledPrimary: "px-4 bg-yellow text-black",
    filledSecondary: "px-4 bg-btnBlue text-white",
    transparent:"px-4 bg-white border border-sidebar text-sidebar ",
    hidden: "bg-transparent bg-sidebar border-2 border-sidebar text-sidebar ",
    cancel: "bg-dusty-gray-700 text-white",
    error: "bg-alizarin-crimson-700 text-white",
    attention: "bg-flame-pea-500 text-white",
    command: "px-4 bg-green-500 text-white",
    icon: "bg-transparent  ",
    

  };

  const loadingColors = {
    filledPrimary: "#ffffff",
    hidden: "#2638dc",
    cancel: "#2638dc",
    error: "#ffffff",
    attention: "#ffffff",
  };
  if (disabled || loading) {
    if (!noOpacityOnDisable) _class.push("opacity-50");
    _class.push("pointer-events-none");
  }

  if (loading || disabled) _class.push("cursor-default");
  if (!loading && !disabled) _class.push("cursor-pointer");

  if (small) _class.push("h-10 text-sm rounded-3xl");
  else _class.push("h-12 text-sm rounded-2xl");

  _class.push(variantStyles[variant]);
  const WrapperComponent = as === "div" ? Div : as;

  return (
    <WrapperComponent
      style={{
        ...(disabled || loading
          ? { filter: "grayscale(1)", pointerEvents: "none" }
          : {}),
      }}
      className={`select-none 	 ${className}`}
      onClick={disabled || loading ? undefined : onClick}
      {...rest}
    >
      <div
        className={`active:opacity-70 px-2  transition-all overflow-hidden font-bold w-full flex justify-center items-center relative ${_class.join(
          " "
        )}`}
      >
        <div
          className={`relative z-10 flex flex-row justify-center items-center ${contentClassName}`}
        >
          {loading === true && (
            <div style={{ height: 15 }} className="mx-2 mb-1">
              <ClipLoader size={15} color={loadingColors[variant]} />
            </div>
          )}
{leftIcon && <div className="mr-2">{leftIcon}</div>}
          {justLoading === true && loading === true ? (
            <span />
          ) : (
            <span>{children}</span>
          )}


{rightIcon && <div className="ml-2">{rightIcon}</div>}

        
        </div>
      </div>
    </WrapperComponent>
  );
};

export default Button;
