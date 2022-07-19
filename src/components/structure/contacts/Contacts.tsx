import s from "./Contacts.module.css"
import React, {useState} from "react";
import viber from "../../../assets/viber.png"
import telega from "../../../assets/telega.png"
import {Form} from "../form/Form";
import {Modal} from "../modal/Modal";

type ContactsType = {}
export const Contacts = (props: ContactsType) => {
    let [activeModal, SetActiveModal] = useState<boolean>(false)
    const HandlerActive = () => SetActiveModal(!activeModal);


    return (
        <div className={s.block}>
            <div className={s.wrapper}>
                <div className={s.information}>
                    <h2 className={s.h2}>Наши контакты</h2>
                    <ul className={s.list}>
                        <li><a className={s.a}
                               href={"https://www.google.by/maps/place/%D1%83%D0%BB.+%D0%97%D0%B5%D0%BB%D0%B5%D0%BD%D1%8B%D0%B9+%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D0%BE%D0%BA+10,+%D0%91%D0%BE%D1%80%D0%B8%D1%81%D0%BE%D0%B2/@54.194682,28.5165409,17z/data=!4m5!3m4!1s0x46da581a878b0559:0xe18655078ba95ba!8m2!3d54.194682!4d28.5187296"}>Беларусь,
                            г. Борисов, ул. Зелёный городок, 10</a></li>
                        <li>Телефон: <a className={s.tel} href="tel:375 177 764295">+375 177 764295</a></li>
                        <li>Email: <a className={s.a} href="mailto:rvm_invest@rambler.ru">rvm_invest@rambler.ru</a></li>
                    </ul>
                    <p className={s.p}>Контактное лицо: Степанова В.И.</p>
                    <p className={s.p}> <b>Работаем: пн-пт 8.00-18.00</b></p>
                    <div className={s.socialNetworks}>
                        <a href="https://www.viber.com/ru/"> <img src={viber} alt="Вайбер"/></a>
                        <a href="https://web.telegram.org/"> <img src={telega} alt="Телеграмм"/></a>

                    </div>
                </div>
                <div className={s.form}>
                    <h3 className={s.h3}>Оставьте заявку на консультацию</h3>
                    <Form callback={HandlerActive}/>
                </div>
                <Modal active={activeModal} setModalActive={SetActiveModal}/>
            </div>
        </div>
    )
}