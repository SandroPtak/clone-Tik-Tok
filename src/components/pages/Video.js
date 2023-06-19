import { useRef, useState } from 'react'
import styles from "./Video.module.css"
import VideoFooter from '../footer/VideFooter'

function Video() {

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
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4?t=2023-05-22T19%3A37%3A45.885Z"
            ></video>
            {/* Side bar */}
            {/* Footer */}
            <VideoFooter/>
        </div>
    )
}

export default Video