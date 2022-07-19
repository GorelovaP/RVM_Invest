import s from "./Hamburger.module.css"

type HamburgerType={
    open: boolean;
    callback: () => void
}
export const Hamburger = (props: HamburgerType) => {
    const HandelOpen = () => {
        props.callback();
        console.log(props.open)
    }
    return(
        <div onClick={HandelOpen} className={s.btnBurger}>
            <span >
            </span>
        </div>
    )
}