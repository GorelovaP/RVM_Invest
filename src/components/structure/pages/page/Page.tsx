import {pagesType} from "../../../../Redux/State";
import s from "./Page.module.css"


export const Page = (props: pagesType) => {
    return (<div className={s.page}>
            <div className={props.id === 2 ? s.newBlock1 : s.block1}>
                <img className={props.id === 2 ? s.newImg : s.img} src={props.img} alt="картинка"/>
            </div>
            <div className={props.id === 2 ? s.newBlock2 : s.block2}>
                <h2 className={s.h2}>{props.h2}</h2>
                <div className={s.text} dangerouslySetInnerHTML={{__html: props.text}}>
                </div>
            </div>
        </div>
    )
}