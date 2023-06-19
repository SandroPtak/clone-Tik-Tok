import styles from './VideoFooter.module.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function VideoFooter({name, description, music}) {
    return (
        <div className={styles.videoFooter}>
            <div className={styles.videoFooter__text}>
                <h3>@{name}</h3>
                <p>{description}</p>
                <div className={styles.videoFooter__music}>
                    <MusicNoteIcon />
                    <div className={styles.videoFooter__musicText}>
                        <p>{music}</p>
                    </div>
                </div>
            </div>
            <img
                className={styles.videoFooter__record}
                alt="Imagem de um viníl girando"
                src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png?t=2023-05-22T19%3A39%3A28.772Z"
            />
        </div>
    )
}

export default VideoFooter