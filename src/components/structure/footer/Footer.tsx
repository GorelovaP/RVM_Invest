import {BeforeFooter} from "./beforeFootor/BeforeFooter";
import s from "./Footer.module.css"
import {Link} from "react-router-dom";
import React from "react";
import viber from "../../../assets/viber.png";
import telega from "../../../assets/telega.png";
import up from "../../../assets/up.png"

export const Footer = () => {
    const componentDidMount = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }
    return (
        <div>
            <BeforeFooter/>
            <div className={s.footer}>
                <div className={s.container}>
                    <div className={s.block}>
                        <Link onClick={componentDidMount} to={"/"}>
                            <div className={s.logo}><b>РВМ-ИНВЕСТ</b></div>
                        </Link>

                        <div className={s.information}>
                            <p>ООО РВМ-Инвест, 222518, г.Борисов, ул. Зелёный городок 10
                                ИНН 1234567890 ОГРН 123456789012
                                Политика конфиденциальности</p>
                        </div>

                    </div>


                    <div>

                        <div className={s.telUp} onClick={componentDidMount}>
                            <a className={s.tel} href="tel:375 177 764295">+375 177 764295</a>
                            <img src={up} className={s.up}/>
                        </div>
                        <div className={s.socialNetworks}>
                            <a href="https://www.viber.com/ru/"> <img src={viber} alt="Вайбер"/></a>
                            <a href="https://web.telegram.org/"> <img src={telega} alt="Телеграмм"/></a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}