import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import style from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cls(style.Navbar, {}, [className])}>
      <div className={style.links}>
        <AppLink
          to="/"
          theme={AppLinkTheme.SECONDARY}
          className={style.mainLink}
        >
          {t('Главная')}
        </AppLink>
        <AppLink to="/about" theme={AppLinkTheme.SECONDARY}>
          {t('О Сайте')}
        </AppLink>
      </div>
    </div>
  );
};
