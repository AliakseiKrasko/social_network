import logo from '../99px_ru_avatar_218398_bezzubik_na_chernom_fone_iz_multfilmv_kak_priruchit (1).jpg';
import React from 'react';
import s from './Header.module.css';


type Props = {

};
export const Header = (props: Props) => {
    return (
        <div className={s.header}>
            <img src={logo} alt="Logo" className={s.logo}/>
        </div>
    );
};