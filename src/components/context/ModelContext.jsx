import React, { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const ModelContext = createContext();

export function ModalProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = (submitted) => {
    if (submitted) {
      toast.success("Quote Submitted!");
    }
    setModalOpen(false);
  };

  const contextValue = {
    modalOpen,
    handleOpenModal,
    handleCloseModal,
  };

  return (
    <ModelContext.Provider value={contextValue}>
      {children}
    </ModelContext.Provider>
  );
}

export function useModalContext() {
  return useContext(ModelContext);
}
