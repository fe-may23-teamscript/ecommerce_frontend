import { FC, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import cn from 'classnames';
import './Button.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  square?: boolean;
  round?: boolean;
  size?: 'small' | 'medium' | 'large';
  active?: boolean;
  isClear?: boolean;
}

export const Button: FC<PropsWithChildren<IButtonProps>> = (props) => {
  const {
    className,
    isClear,
    square,
    round,
    size,
    active,
    children,
    ...otherProps
  } = props;

  return (
    <button
      className={cn(
        'button',
        {
          ['size-s']: size === 'small',
          ['size-m']: size === 'medium',
          ['size-l']: size === 'large',
          ['button-square']: square,
          ['clear']: isClear,

          ['round']: round,
        },
        [className],
      )}
      disabled={active}
      {...otherProps}
    >
      {children}
    </button>
  );
};
