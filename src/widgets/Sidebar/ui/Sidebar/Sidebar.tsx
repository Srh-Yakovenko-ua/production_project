import React, {FC, useState} from 'react';
import {cls} from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss'
import {ThemeSwitcher} from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

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
                {/*LangSwitcher*/}
            </div>
        </div>
    );
};

