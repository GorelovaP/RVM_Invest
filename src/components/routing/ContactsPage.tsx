import {Text} from "../structure/Text/Text";
import {TextType} from "../../Redux/State";
import {Contacts} from "../structure/contacts/Contacts";

type ContactsPagePropsType = {
    texts: TextType;
}

export const ContactsPage = (props: ContactsPagePropsType) => {
    const componentDidMount= () =>{
        window.scrollTo(0, 0);
    }
    componentDidMount();
    return (
        <div>
            <Text text={props.texts}/>
            <Contacts />
        </div>
    )
}