import {pagesType} from "../../../Redux/State";
import {Page} from "./page/Page";

type PagesType = {
    pages: Array<pagesType>;
}

export const Pages = (props: PagesType) => {

    let pagesAll = props.pages.map(p=>  <Page key={p.id} id={p.id} h2={p.h2} img={p.img} text={p.text}/> )
    return (
        <div>
            {pagesAll}
        </div>
    )
}
