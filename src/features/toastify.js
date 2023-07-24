import { toast } from "react-toastify";

export const showToast = (
  message,
  type
) => {
  if (type === "success") {
    const toastSuccessMessage = toast.success(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastSuccessMessage);
    }, 4000);
  } else if (type === "error") {
    const toastErrorMessage = toast.error(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastErrorMessage);
    }, 4000);
  } else if (type === "pending") {
    const toastLoadingMessage = toast.loading(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastLoadingMessage);
    }, 1200);
  } else if (type === "warning"){
    const toastWarningMessage = toast.warn(message, {
      position: toast.POSITION.TOP_RIGHT,
    });
    setTimeout(() => {
      toast.dismiss(toastWarningMessage);
    }, 6000);
  }
};
