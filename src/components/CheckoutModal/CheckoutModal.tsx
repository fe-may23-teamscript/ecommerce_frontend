import React from 'react';
import './CheckoutModal.scss';

type Props = {
  setShowModal: (showModal: boolean) => void;
};

export const CheckoutModal: React.FC<Props> = ({ setShowModal }) => {
  return (
    <div className="modal">
      <button
        type="button"
        className="modal__button"
        onClick={() => setShowModal(false)}
      ></button>

      <p className="modal__text">
        Checkout is not implemented yet.
        <br />
        Do you want to clear the Cart?
      </p>
    </div>
  );
};
