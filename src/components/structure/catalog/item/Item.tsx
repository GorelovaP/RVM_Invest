import {ItemType} from "../../../../Redux/State";
import s from "./Item.module.css"


export const Item = (props: ItemType) => {
    return (
        <div className={s.item}>
            <div className={s.img}>
                <img  src={props.img} alt="картинка"/>
            </div>
            <div>
                <h3>{props.name}</h3>
                <div className={s.text}>
                    {props.text}
                </div>
                <div className={s.divP}>
                    <p className={s.p}> <b>Цена:</b><b className={s.big}> {props.price}</b> за метр кубический</p>
                </div>
            </div>
        </div>
    )
}