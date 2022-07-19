import {Page} from "../structure/pages/page/Page";
import { stateType} from "../../Redux/State";
import bigForest from "../../assets/bigForest.png"
import {Background} from "../structure/background/Background";
import {Text} from "../structure/Text/Text";
import {Advantages} from "../structure/advantages/Advantages";
import React from "react";

type AboutType = {
    state: stateType;
}

export const About = (props: AboutType) => {
    const componentDidMount= () =>{
        window.scrollTo(0, 0);
    }
    componentDidMount();
    return (
        <div>
            <Page id={props.state.pages[0].id} img={props.state.pages[0].img} h2={props.state.pages[0].h2} text={props.state.pages[0].text}/>
            <Background img={bigForest}/>
            <Text text={props.state.texts[0]}/>
            <Advantages advantages={props.state.advantages}/>
            <Page id={props.state.countries[0].id}
                  h2={props.state.countries[0].h2}
                  img={props.state.countries[0].img}
                  text={props.state.countries[0].text}/>
        </div>
    )
}