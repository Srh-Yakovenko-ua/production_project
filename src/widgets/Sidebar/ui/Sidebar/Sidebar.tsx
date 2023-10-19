import React, { FC, useState } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/icons/about_20_20.svg';
import MainIcon from 'shared/assets/icons/main_20_20.svg';
import style from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar: FC<SidebarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prevState) => !prevState);
  };

  return (
    <div
      className={cls(style.Sidebar, { [style.collapsed]: collapsed }, [
        className,
      ])}
      data-testid="sidebar"
    >
      <Button
        onClick={onToggle}
        data-testid="sidebar-toggle"
        className={style.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={style.items}>
        <AppLink
          to={RoutePath.main}
          theme={AppLinkTheme.SECONDARY}
          className={style.item}
        >
          <MainIcon className={style.icon} />
          <span className={style.link}>{t('Главная')}</span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          theme={AppLinkTheme.SECONDARY}
          className={style.item}
        >
          <AboutIcon className={style.icon} />
          <span className={style.link}>{t('О Сайте')}</span>
        </AppLink>
      </div>

      <div className={style.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={style.lang} short={collapsed} />
      </div>
    </div>
  );
};
