import s from "./Hamburger.module.css"

type HamburgerType = {
    open: boolean;
    callback: () => void
}
export const Hamburger = (props: HamburgerType) => {
    const HandelOpen = () => {
        props.callback();
    }
    return (
        <div onClick={HandelOpen} className={`${s.btnBurger} ${props.open && s.open}`}>
            <span> </span>
            <span> </span>
            <span> </span>
        </div>
    )
}