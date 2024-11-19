import { toast, ToastOptions, Bounce } from "react-toastify";

const showToast = (message: string, type: string) => {
  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  };
  if (type === "success") {
    toast.success(message, toastOptions);
  }
  if (type === "error") {
    console.log("Error message:", message);
    toast.error(message, toastOptions);
  }
};

export default showToast;
