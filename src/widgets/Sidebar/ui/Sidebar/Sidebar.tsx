import React, {FC, useState} from 'react';
import {cls} from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';
import {LangSwitcher} from 'shared/ui/LangSwitcher/LangSwitcher';

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = ({className}) => {
    const [collapsed, setCollapsed] = useState(false)

    const onToggle = () => {
        setCollapsed((prevState) => !prevState)
    }

    return (
        <div className={cls(style.Sidebar, {[style.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>toggle</button>
            <div className={style.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher className={style.lang}/>
            </div>
        </div>
    );
};

