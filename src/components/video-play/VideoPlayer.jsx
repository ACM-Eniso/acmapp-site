import './VideoPlayer.css'
import video from '../../assets/Red and Black Futuristic Gaming Channel YouTube Intro.mp4'
import {useRef} from "react";

const VideoPlayer = ({playState,setPlayState}) => {

    const player = useRef(null)

    const closePlayer = () =>{
        if (e.target===player.current){
            setPlayState(false)
        }
    }
    return (
        <div className={`video-player ${playState} ?'' : 'hide' `} ref={player} onClick={closePlayer}>
            <video src={video} autoPlay controls></video>
        </div>
    );
};

export default VideoPlayer;
