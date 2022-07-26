import React from 'react';
import s from "./NavBar.module.css"
import {Link} from 'react-router-dom';

type NavBarPropsType = {
    open: boolean;
    callback: () => void
}

export const NavBar = (props: NavBarPropsType) => {

    return (
        <>
            <ul className={props.open ? s.list : s.listClose}>
                <Link onClick={props.callback} className={s.li} to={"/About"}>
                    <li>О компании</li>
                </Link>
                <Link onClick={props.callback} className={s.li} to={"/Technologies"}>
                    <li>Технологии</li>
                </Link>
                <Link onClick={props.callback} className={s.li} to={"/Products"}>
                    <li> Продукция</li>
                </Link>
                <Link onClick={props.callback} className={s.li} to={"/Contacts"}>
                    <li> Контакты</li>
                </Link>
            </ul>
        </>


    );
}