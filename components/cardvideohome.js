import styles from '../styles/cardHome.module.css'

export default function CardHome(props) {
    return (
        <div className={styles.card}>
            <img src={props.src} className={styles.src}/>
            <div className={styles.card_content}>
                <img src={props.logo} alt="logo" className={styles.logo}/>
                <div className={styles.card_text}>
                    <h1 className={styles.title}>{props.titulo}</h1>
                    <p className={styles.canal}>{props.canal}</p>
                    <div className={styles.desc}>{props.visualizacao} - {props.publicado}</div>
                </div>
            </div>
        </div>
    )
}