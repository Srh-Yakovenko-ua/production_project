import React, { FC } from 'react';
import { cls } from 'shared/lib/classNames/classNames';
import style from './Loader.module.scss';

interface LoaderProps {
    className? : string
}

export const Loader: FC<LoaderProps> = ({ className }) => (
  <div className={cls(style['lds-ellipsis'], {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
