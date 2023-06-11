import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import style from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({
  className, to, theme, children, ...otherProps
}) => (
  <Link
    to={to}
    className={cls(style.AppLink, {}, [className, style[theme]])}
    {...otherProps}
  >
    {children}
  </Link>
);
