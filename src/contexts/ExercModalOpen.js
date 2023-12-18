import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalExercProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openExercModal = () => {
    setIsModalOpen(true);
  };

  const closeExercModal = () => {
    setIsModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{ isModalOpen, openExercModal, closeExercModal }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalExercProvider };
