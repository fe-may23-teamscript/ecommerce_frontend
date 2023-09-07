import React from 'react';
import './Login.scss';
import { ReactComponent as Close } from 'assets/icons/close.svg';

type Props = {
  setShowModal: (showModal: boolean) => void;
};

export const Login: React.FC<Props> = ({ setShowModal }) => {
  return (
    <div className="login">
      <h2 className="login__header">Sign In</h2>
      <button
        type="button"
        className="login__button"
        onClick={() => setShowModal(false)}
      >
        <Close className="login__button-icon" />
      </button>
      <form className="login__form">
        <input
          className="login__input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          className="login__input"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit" className="login__submit">
          Log in
        </button>
      </form>
    </div>
  );
};
