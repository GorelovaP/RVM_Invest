import s from "./Catalog.module.css"
import {Item} from "./item/Item";
import {ItemType} from "../../../Redux/State";

type CatalogPageType = {
    catalog: Array<ItemType>
}

export const Catalog = (props: CatalogPageType) => {

    let ItemsAll = props.catalog.map(item => <Item key={item.id}
                                                   id={item.id} name={item.name} img={item.img}
                                                   text={item.text} price={item.price}/>)
    return (
        <div className={s.block}>
            <div className={s.wrapper}>
                <h2 className={s.h2}>Продукция</h2>
                <p className={s.p}>Мы предлагаем своим заказчикам надежную долговечную продукцию экспортного
                    качества.<br></br>Для заказа оставляйте заявку на консультацию</p>
                <div className={s.catalog}>
                    {ItemsAll}
                </div>
            </div>
        </div>
    )
}
