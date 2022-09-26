import { toast } from "react-toastify";

export const messageBox = (type = "error", message = "", options = {}) => {
    toast.dismiss();
    if (type === "error") {
      return toast.error(message, { ...options });
    }
    return toast.success(message, { ...options });
  };


  