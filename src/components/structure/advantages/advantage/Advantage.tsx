import {AdvantageType} from "../../../../Redux/State";
import s from "./Advantage.module.css"


export const Advantage = (props: AdvantageType) => {
    return (
        <div className={s.advantage}>
            <div className={s.img}>
                <img src={props.img} alt="картинка"/>
            </div>
            <div className={s.text}>
                {props.text}
            </div>
        </div>
    )
}