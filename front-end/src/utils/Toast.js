import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const showSuccessToast = (message) => {
        toast.success(message, {
                position: "top-right",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
        });
};


export const showErrorToast = (message) => {
        toast.error(message, {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
        });
};


let loadingToastId = null; // Store the ID of the loading toast

export const showLoadingToast = (message = "Loading...") => {
        loadingToastId = toast.loading(message, {
                position: "top-right",
                autoClose: false,  // We don't want to auto-close the loading toast
                hideProgressBar: true,  // Hide the progress bar (just a spinner)
                closeOnClick: false,  // Disable close on click for loading toast
                pauseOnHover: false,  // Disable pausing on hover
                draggable: false,  // Disable dragging for loading toast
        });
};

export const hideLoadingToast = () => {
        if (loadingToastId) {
                toast.dismiss(loadingToastId);  // Dismiss the loading toast once the task is done
        }
};