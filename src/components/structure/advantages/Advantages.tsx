import s from "./Advantages.module.css"
import {Advantage} from "./advantage/Advantage";
import {AdvantageType} from "../../../Redux/State";

type AdvantagesPageType = {
    advantages: Array<AdvantageType>;
}

export const Advantages = (props: AdvantagesPageType) => {

    let AdvantagesAll = props.advantages.map(a => <Advantage key={a.id} id={a.id} img={a.img} text={a.text}/>)
    return (
        <div className={s.block}>
            <div className={s.wrapper}>
                <h2 className={s.h2}>Наши преимущества</h2>
                <p className={s.p}>ООО «РВМ-Инвест», стремясь к достижению наилучших результатов,
                    имеет ряд преимуществ, которые делают сотрудничество с нами надежным и приятным</p>
                <div className={s.advantages}>
                    {AdvantagesAll}
                </div>
            </div>
        </div>
    )
}
