import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import style from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className? : string
}

export const NotFoundPage: FC<NotFoundPageProps> = ({ className }) => {
  const { t } = useTranslation();

  return (
    <div className={cls(style.NotFoundPage, {}, [className])}>
      {t('Страница не найдена')}
    </div>
  );
};
