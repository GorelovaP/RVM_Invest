import React from 'react'
import s from "./VideoControls.module.css"
import play from '../../../../../assets/play-button.png';
import pause from "../../../../../assets/stop-button.png";

type VideoControlsType =
    {
        callback: () => void;
        play: boolean;
    }


export const VideoControls = (props: VideoControlsType) => {
    const HandelPlay = () => {
        props.callback();
    }
    return (
        <div className={s.videoController} onClick={HandelPlay}>{props.play ?
            <img  src={pause} alt="stop"/> : <img src={play} alt="play"/>}</div>
    )
}