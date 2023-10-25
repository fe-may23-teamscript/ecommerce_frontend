import React from 'react';
import './CheckoutModal.scss';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import checkOut from 'assets/images/checkout.png';
import { useTranslation } from 'react-i18next';

type Props = {
  setShowModal: (showModal: boolean) => void;
};

export const CheckoutModal: React.FC<Props> = ({ setShowModal }) => {
  const { t } = useTranslation();

  return (
    <div className="modal">
      <button
        type="button"
        className="modal__button"
        onClick={() => setShowModal(false)}
      >
        <Close className="modal__button-icon" />
      </button>
      <img className="modal__img" src={checkOut} />

      <h3 className="modal__title">{t('thankYou')}</h3>

      <p className="modal__text">{t('createOrder')}</p>
    </div>
  );
};
