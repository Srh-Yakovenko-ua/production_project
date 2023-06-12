import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import style from './PageLoader.module.scss';

interface PageLoaderProps {
    className? : string
}

export const PageLoader: FC<PageLoaderProps> = ({ className }) => (
  <div className={cls(style.PageLoader, {}, [className])}>
    <Loader />
  </div>
);
