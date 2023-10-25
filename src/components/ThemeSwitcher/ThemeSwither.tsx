import React from 'react';
import './ThemeSwitcher.scss';

type Props = {
  theme: string;
  toggleTheme: () => void;
};

export const ThemeSwitcher: React.FC<Props> = ({ theme, toggleTheme }) => {
  return (
    <div className="theme-switcher">
      <input
        type="checkbox"
        checked={theme === 'dark'}
        onChange={toggleTheme}
        id="switch"
      />
      <label htmlFor="switch" className="theme-switcher__switch">
        <span className="theme-switcher__ball"></span>
      </label>
    </div>
  );
};
