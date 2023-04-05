import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const successMessage = () =>
  toast.success(`successfully created`, {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    width: "200px",
  });
