import {FiAlertCircle, FiCheckCircle, FiXCircle} from "react-icons/fi";

const CustomAlert = ({ type = "success", className = "", children, title }) => {
  return (
    <div
      className={`p-4 mb-4 text-sm rounded-xl flex flex-row
      ${type === "success" ? "text-green-500 bg-green-500/20" : ""}
      ${type === "error" ? "text-rose-600 bg-rose-700/20" : ""}
      ${type === "info" ? "text-alertText bg-alert" : ""} ${className}`}
      role="alert"
    >
      <div className="flex items-center gap-2 ">
        {type === "info" && (
          <FiAlertCircle className="stroke-blue-500" size={24} />
        )}
        {type === "success" && (
          <FiCheckCircle className="stroke-blueColor" size={24} />
        )}
        {type === "error" && (
          <FiXCircle className="stroke-blueColor" size={24} />
        )}
        <span className="font-semibold">{title}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CustomAlert;
