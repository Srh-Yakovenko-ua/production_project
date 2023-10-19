import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ className, short }) => {
  const { t, i18n } = useTranslation();
  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={cls('', {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
