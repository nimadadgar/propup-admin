import React, { useCallback } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcHighPriority } from "react-icons/fc";

const CustomeInput = ({
  name = "",
  options = {},
  onSubmit = () => {},
  selectOnFocus = false,
  strokeOnError = true,
  fillOnError = true,
  textAlign = "left",
  hidePasswordToggle = false,
  required = false,
  onShowPasswordToggle = () => {},
  forceShowPasswordToggle = false,
  leftIcon = null,
  rightIcon = null,
  hasError = false,
  msg = "",
  label = "",
  className = "",
  ...rest
}) => {

  const onFocus = (event) => {
    if (selectOnFocus === false) return;
    event.target.select();
  };

  
  return (
    <div className={`${className}`}>
    <div className={` rounded-3xl group   relative overflow-hidden   box-border
 
      border ${hasError ? 'border-red-500':'border-gray-200'} 
    focus-within:${hasError?'border-red-500':'border-textSelectColor'} focus-within:shadow-[0px_0px_5px_rgba(10,95,89,1)]  `}>
        
           <input 
           
         placeholder="                  "
  
 onFocus={onFocus}
 onSubmit={onSubmit}
 
 autoComplete="disabled"
 {...rest}
 {...({ ...rest }.disabled
   ? { disabled: false, readOnly: true }
   : null)}
 className={`   h-full px-4 peer  z-100  pt-5 pb-1 placeholder-shown:py-3 focus:pt-5 focus:pb-1  h-full   w-full font-normal  appearance-none  focus:outline-none   ${
   textAlign === "center"
     ? "text-center"
     : textAlign === "left"
     ? "text-left ltr"
     : "text-right rtl"
 }`}
/>

<label   className=" absolute text-sm text-gray-500 
    hover:cursor-text	
  
     duration-300 transform -translate-y-3 scale-75 top-3 z-0 origin-[0] left-4
     peer-hover:text-textSelectColor
     peer-hover:dark:text-textSelectColor
      peer-placeholder-shown:scale-100 
      peer-placeholder-shown:translate-y-0 
      peer-hover:scale-75 
      peer-hover:-translate-y-3">{label}</label>
    </div>
   
    {hasError && msg.trim() !== "" && (
        <div
          className={
            "min-h-5  rounded-lg bg-alizarin-crimson-100 text-error font-semibold text-xs flex items-center m1-2 text-right p-1"
          }
        >
          <FcHighPriority className="h-6 w-6 mr-1" />
          {msg}
        </div>
      )}
      
    </div>
  );
};

export default CustomeInput;
