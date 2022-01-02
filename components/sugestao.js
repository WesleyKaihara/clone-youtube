import Image from 'next/image'
import styles from '../styles/sugestao.module.css'

export default function Sugestao() {
    return (
        <div className={styles.sugestao}>
            <Image
                src="/images/pick1.webp"
                height={50}
                width={220} 
                className={styles.sugestao_img}/>
            <div>
                <h1 className={styles.title}>Homepage da Tesla com ReactJS | UI Clone #14
                </h1>
                <p className={styles.desc}>
                    Rocketseat
                </p>
                <div className={styles.info}>
                    <p className={styles.desc}> 278 mil visualizações - </p> 
                    <p className={styles.desc}> há 5 meses</p>
                </div>
            </div>
        </div>
    )
}