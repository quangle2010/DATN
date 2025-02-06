import { Modal } from "bootstrap/dist/js/bootstrap.bundle.min";

/**
 * Function to open a modal
 * @param {string} modalId - The ID of the modal element
 */
export const openModal = (modalId) => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
                const modalInstance = new Modal(modalElement);
                modalInstance.show();
        } else {
                console.error(`Modal with ID "${modalId}" not found.`);
        }
};

/**
 * Function to close a modal
 * @param {string} modalId - The ID of the modal element
 */
export const closeModal = (modalId) => {
        const modalElement = document.getElementById(modalId);
        if (modalElement) {
                const modalInstance = Modal.getInstance(modalElement);
                if (modalInstance) {
                        modalInstance.hide();
                } else {
                        console.error(`Modal instance for ID "${modalId}" not found.`);
                }
        } else {
                console.error(`Modal with ID "${modalId}" not found.`);
        }
};
