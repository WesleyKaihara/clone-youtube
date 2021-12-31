import Image from 'next/image'
import styles from '../styles/comentario.module.css'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';

export default function Comentario() {
    return (
        <div className={styles.comentario}>
            <div>
                <Image
                    src="/images/cachorro.jpg"
                    width={40}
                    height={40}
                    className={styles.canal_img} />
            </div>
            <div>
                <p></p>
                <h1 className={styles.nome_canal}>Juca123 <span className={styles.tempo}>há 3 meses</span></h1>
                <p className={styles.comentario_text}>Muito bom</p>
                <div className={styles.likes}>
                    <ThumbUpIcon className={styles.like_btn}/>
                    <p>30</p>
                    <ThumbDownOffAltIcon className={styles.like_btn}/>
                    <p className={styles.like_btn}>RESPONDER</p>
                </div>
            </div>
        </div>
    )
}