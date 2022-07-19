import s from "./Background.module.css"


type BackgroundPropsType={
    img:string;
}

export const Background = (props: BackgroundPropsType ) => {
    return (
        <div style={{backgroundImage:`url(${props.img})` }} className={s.bg}>

        </div>
    )
}