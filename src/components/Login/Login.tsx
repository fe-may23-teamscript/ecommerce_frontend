import React, { useState } from 'react';
import './Login.scss';
import { ReactComponent as Close } from 'assets/icons/close.svg';
import { useAppDispatch } from '../../app/providers/store/lib/redux-hooks';
import { login, toggleFirst, toggleModal } from '../../app/providers/store/slices/userSlice';


export const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useAppDispatch();

  return (
    <div className="login">
      <h2 className="login__header">Sign In</h2>
      <button
        type="button"
        className="login__button"
        onClick={() => dispatch(toggleModal(false))}
      >
        <Close className="login__button-icon" />
      </button>
      <form
        className="login__form"
        onSubmit={(event) => {
          event.preventDefault();
          dispatch(toggleModal(false));
          dispatch(toggleFirst(true));
          dispatch(login(email));
        }}
      >
        <input
          className="login__input"
          placeholder="Email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          className="login__input"
          type="password"
          required
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="login__submit"
        >
          Log in
        </button>
      </form>
    </div>
  );
};
