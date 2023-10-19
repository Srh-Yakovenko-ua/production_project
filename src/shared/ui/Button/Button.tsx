import React, { ButtonHTMLAttributes, FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import style from './Button.module.scss';

export enum ButtonTheme {
  CLEAR = 'clear',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  L = 'size_l',
  M = 'size_m',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ButtonTheme;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = ({
  className,
  theme,
  children,
  square,
  size = ButtonSize.M,
  ...otherProps
}) => {
  const mods: Record<string, boolean> = {
    [style.square]: square,
    [style[size]]: true,
  };

  return (
    <button
      type="button"
      className={cls(style.Button, mods, [className, style[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
