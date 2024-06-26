import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <img
        src={imageSrc}
        alt="Enlarged"
        className="rounded-lg object-fill md:p-16"
      />
      <button
        onClick={onClose}
        className="absolute right-5 top-0 m-4 text-2xl text-white"
      >
        &times;
      </button>
    </div>
  );
};

export default Modal;
