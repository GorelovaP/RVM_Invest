import React, {Dispatch, SetStateAction} from "react";
import s from "./Modal.module.css"
import image from "../../../assets/оk.png"
import exit from "../../../assets/exit.png"

type ModalPropsType = {
    active: boolean;
    setModalActive: Dispatch<SetStateAction<boolean>>;
}
export const Modal = (props: ModalPropsType) => {
    return (<div className={props.active ? s.modalActive : s.modal} onClick={() => props.setModalActive(false)}>

            <div className={s.context}>
                <img  className={s.exit} src={exit} alt="выход"/>
                <div onClick={(event => event.stopPropagation())}>
                    <img src={image} alt="картинка" className={s.icon}/>
                    <h2 className={s.h2}> Спасибо! <br/>Мы получили вашу заявку
                    </h2>
                    <p className={s.p}>Наш менеджер свяжется с Вами и ответит на все интересующие Вас вопросы. Проведет
                        индивидуальную консультацию и подберет необходимую технологию производства и типоразмер
                        продукции,
                        подходящую именно под Ваш случай. Поможет с оформлением заказа или обсудит условия
                        сотрудничества.</p>
                </div>

            </div>
        </div>
    );
}