import './Login.scss';

export const Login = () => {
  return (
    <div className="login">
      <h2 className="login__header">Please Log In</h2>
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
