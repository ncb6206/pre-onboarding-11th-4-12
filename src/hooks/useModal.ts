import { useState } from 'react';

const useModal = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
  };

  return { showModal, handleShowModal, handleHideModal };
};

export default useModal;
