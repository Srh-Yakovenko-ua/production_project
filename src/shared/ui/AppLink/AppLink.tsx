import React, {FC} from 'react';
import {cls} from 'shared/lib/classNames/classNames';
import style from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
    className?: string
    theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = ({className, to, theme, children, ...otherProps}) => {
    return (
        <Link to={to}
              className={cls(style.AppLink, {}, [className, style[theme]])} {...otherProps}
        >
            {children}
        </Link>
    );
};

