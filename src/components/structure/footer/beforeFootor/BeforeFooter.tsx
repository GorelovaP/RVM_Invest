import logo from "../../../../assets/logo.svg.png";
import s from "./BeforeFooter.module.css"

export const BeforeFooter = () => {
    return (
        <div className={s.block}>
            <img className={s.img} src={logo} alt="логотип"/>
        </div>
    );
}