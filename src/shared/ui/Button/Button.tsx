import React, { ButtonHTMLAttributes, FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({
  className, theme, children, ...otherProps
}) => (
  <button
    type="button"
    className={cls(style.Button, {}, [className, style[theme]])}
    {...otherProps}
  >
    {children}
  </button>
);
