import {Catalog} from "../structure/catalog/Catalog";
import React from "react";
import {ItemType} from "../../Redux/State";
import {Contacts} from "../structure/contacts/Contacts";


type ProductsPropsType = {
    catalog: Array<ItemType>;
}

export const Products = (props: ProductsPropsType) => {
    const componentDidMount= () =>{
        window.scrollTo(0, 0);
    }
    componentDidMount();
    return (
        <div>
            <Catalog catalog={props.catalog}/>
            <Contacts/>
        </div>
    )
}