import s from "./Text.module.css"
import {TextType} from "../../../Redux/State";


type TextPropsType={
    text: TextType;
}

export const Text = (props: TextPropsType ) => {
    return (
        <div className={s.wrapper} dangerouslySetInnerHTML={{__html: props.text.text}}>
        </div>
    )
}