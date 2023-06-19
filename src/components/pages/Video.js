import { useRef, useState } from 'react'
import styles from "./Video.module.css"
import VideoFooter from '../footer/VideFooter'
import VideoSidebar from '../sidebar/VideoSidebar'

function Video({likes, messages, shares, name, description, music, url}) {

    const videoRef = useRef(null)
    const [play, setPlay] = useState(false)

    function handleStart() {
        if (play) {
            videoRef.current.pause()
            setPlay(false)
        } else {
            videoRef.current.play()
            setPlay(true)
        }
    }

    return (
        <div className={styles.video}>
            <video
                className={styles.video__player}
                ref={videoRef}
                onClick={handleStart}
                loop
                src={url}
            ></video>
            <VideoSidebar 
                likes={likes}
                messages={messages}
                shares={shares}
            />
            <VideoFooter 
                name={name}
                description={description}
                music={music}
                />
        </div>
    )
}

export default Video