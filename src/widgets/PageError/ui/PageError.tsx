import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import style from './PageError.module.scss';

interface PageErrorProps {
    className? : string
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
  const { t } = useTranslation('error-page');
  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <div className={cls(style.PageError, {}, [className])}>
      {t('Произошла ошибка')}
      <Button onClick={reloadPage}>
        {t('Обновить страницу')}
      </Button>
    </div>
  );
};
