import React from 'react';
import s from "./Main.module.css"


import video from "../../../assets/video.mp4"
import img from "../../../assets/block.png"
import {Video} from "./video/Video";


type MainType = {}

export const Main = (props: MainType) => {
    return (
        <div className={s.main}>
            <div className={s.main__inform}>
                <Video video={video}/>
                <div className={s.mainWrapper}>
                    <h1 className={s.main__title}>производство cлоисто-клееного бруса и брикетов из древесины хвойных
                        пород.</h1>
                    <p className={s.main__definition}> К этому процессу мы привлекаем только лучших специалистов,
                        которые при помощи современного оборудования делают производственный процесс
                        безукоризненным </p>
                    <div className={s.main__wrapper__image}>
                        <img src={img} className={s.main__image}/>
                    </div>
                </div>
                {/*<MainInformation/>*/}
            </div>
        </div>
    );
}