import React from 'react';
import './App.css';

import {Header} from "./components/structure/header/Header";
import { HashRouter, Route, Routes} from 'react-router-dom';
import {stateType} from "./Redux/State"
import {About} from "./components/routing/About";
import {MainPage} from "./components/routing/MainPage";
import {Footer} from "./components/structure/footer/Footer";
import {Technologies} from "./components/routing/Technologies";
import {Products} from "./components/routing/Products";
import {ContactsPage} from "./components/routing/ContactsPage";

type AppType = {
    state: stateType;
}

function App(props: AppType) {
    return (

        <HashRouter>
            <Header/>
            <Routes>
                <Route path="*" element={<MainPage state={props.state}/>}/>
                <Route path="/About" element={<About state={props.state}/>}/>
                <Route path="/Technologies" element={<Technologies state={props.state}/>}/>
                <Route path="/Products" element={<Products catalog={props.state.catalog}/>}/>
                <Route path="/Contacts" element={<ContactsPage texts={props.state.texts[2]}/>}/>
            </Routes>
            <Footer/>
        </HashRouter>

    );
}

export default App;
