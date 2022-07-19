import {Main} from "../structure/mainn/Main";
import {Pages} from "../structure/pages/Pages";
import {stateType} from "../../Redux/State";
import {Advantages} from "../structure/advantages/Advantages";
import {Catalog} from "../structure/catalog/Catalog";
import {Page} from "../structure/pages/page/Page";
import {Contacts} from "../structure/contacts/Contacts";
import React from "react";


type MainPageType = {
    state: stateType;
}
export const MainPage = (props: MainPageType) => {
    const componentDidMount= () =>{
        window.scrollTo(0, 0);
    }
    componentDidMount();
    return (
        <div>
            <Main/>
            <Pages pages={props.state.pages}/>
            <Catalog catalog={props.state.catalog}/>
            <Advantages advantages={props.state.advantages}/>
            <Page id={props.state.countries[0].id}
                  h2={props.state.countries[0].h2}
                  img={props.state.countries[0].img}
                  text={props.state.countries[0].text}/>
            <Contacts/>
        </div>
    )
}