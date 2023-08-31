import React, { useState } from 'react';
import './CheckoutModal.scss';

export const CheckoutModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {isOpen && (
        <div className="modal">
          <button
            type="button"
            className="modal__button"
            onClick={() => setIsOpen(false)}
          ></button>

          <h2 className="modal__title">Thank You!</h2>
          <p className="modal__text">
            Your order has been successfully created.
          </p>
        </div>
      )}
    </>
  );
};
