import React, {useEffect, useState} from 'react';
import s from "./Header.module.css"
import {Link, useMatch} from 'react-router-dom';
import {NavBar} from "./navBar/NavBar";
import {Hamburger} from "./hamburger/Hamburger";


export const Header = () => {
    const match = useMatch('/:routeKey');
    const [scroll, setScroll] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 50);
        });
    }, []);
    const componentDidMount= () =>{
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }

    const [active, setActive] = useState<boolean>(false);
    const letOpen = () => setActive(!active);

    return (
        <div className={`${s.header} ${!match?.params.routeKey && !scroll ? s.headerHome : ''}`}>
            <div className={s.container}>
                <div className={s.block}>
                    <Hamburger open={active} callback={letOpen}/>
                    <Link to={"/"} onClick={componentDidMount}>
                        <div className={s.logo}><b>РВМ-ИНВЕСТ</b></div>
                    </Link>
                </div>
                <NavBar open={active}/>
                <div>
                    <a className={s.tel} href="tel:375 177 764295">+375 177 764295</a>
                </div>

            </div>
        </div>
    );
}

