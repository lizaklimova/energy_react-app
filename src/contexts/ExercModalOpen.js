import { createContext, useState } from 'react';

const ModalContext = createContext();

const ModalExercProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFeedModalOpen, setIsFeedModalOpen] = useState(false);

  const openExercModal = () => {
    setIsModalOpen(true);
  };

  const closeExercModal = () => {
    setIsModalOpen(false);
  };

  const openFeedModal = () => {
    setIsFeedModalOpen(true);
  };

  const closeFeedModal = () => {
    setIsFeedModalOpen(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isModalOpen,
        openExercModal,
        closeExercModal,
        isFeedModalOpen,
        openFeedModal,
        closeFeedModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export { ModalContext, ModalExercProvider };
