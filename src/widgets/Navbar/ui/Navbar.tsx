import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import style from './Navbar.module.scss';

interface NavbarProps {
    className?: string

}

export const Navbar: FC<NavbarProps> = ({ className }) => (
  <div className={cls(style.Navbar, {}, [className])}>
    <div className={style.links}>
      <AppLink to="/" theme={AppLinkTheme.SECONDARY} className={style.mainLink}>Главная</AppLink>
      <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>О сайте</AppLink>
    </div>

  </div>
);
