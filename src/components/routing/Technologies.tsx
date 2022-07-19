import {Page} from "../structure/pages/page/Page";
import {stateType} from "../../Redux/State";
import {Background} from "../structure/background/Background";
import bg2 from "../../assets/bg2jpeg.jpeg"
import {Text} from "../structure/Text/Text";

type TechnologiesPropsType = {
    state: stateType;
}

export const Technologies = (props: TechnologiesPropsType) => {
    const componentDidMount= () =>{
        window.scrollTo(0, 0);
    }
    componentDidMount();
    return (
        <div>
            <Page id={props.state.technologies[0].id} img={props.state.technologies[0].img}
                  h2={props.state.technologies[0].h2} text={props.state.technologies[0].text}/>
            <Background img={bg2}/>
            <Text text={props.state.texts[1]}/>
            <Page id={props.state.technologies[1].id} img={props.state.technologies[1].img} h2={props.state.technologies[1].h2}
                  text={props.state.technologies[1].text}/>

        </div>
    )
}