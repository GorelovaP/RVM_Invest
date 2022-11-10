import React, {useState} from 'react'
import ReactPlayer from 'react-player'

import {VideoControls} from "./controls/VideoControls";
import s from "./Video.module.css"

type VideoType = {
    video: string;
}


export const Video = (props: VideoType) => {

    let [play, setPlay] = useState(false);

    const HandlePlay = () => {
        setPlay(!play);
    }
    return (
        <div className={s.videoWrapper}>
            <ReactPlayer
                className={s.video}
                url={props.video}
                controls={false}
                loop={true}
                height='65vh'
                width='100%'
                playing={play}
            />
            <VideoControls callback={HandlePlay} play={play}/>
        </div>
    );

};
