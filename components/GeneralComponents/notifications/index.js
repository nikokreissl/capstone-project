import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// export const successMessage = (item, crud) =>
//   toast.success(`${item} successfully ${crud}`, {
//     position: "top-right",
//     autoClose: 2000,
//     hideProgressBar: false,
//     closeOnClick: true,
//     pauseOnHover: true,
//     draggable: true,
//     progress: undefined,
//     theme: "colored",
//   });

export const successMessage = () =>
  toast.success("Success", {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

export const infoMessage = (item, crud) =>
  toast.info(`${item} successfully ${crud}`, {
    position: "top-right",
    autoClose: 1300,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });
