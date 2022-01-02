import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CardHome from '../components/cardvideohome'

export default function Home() {
   return (
      <div className={styles.home}>
         <div className={styles.menulateral}>

         </div>
         <div className={styles.content}>
            <div className={styles.submenu}>
               <p style={{ background: "rgba(255, 255, 255, 0.884)", color: "#000" }}>Tudo</p>
               <p>Música</p>
               <p>Podcast</p>
               <p>Ao vivo</p>
               <p>Mixes</p>
               <p>Comida</p>
               <p>Criptomoedas</p>
               <p>Novidades</p>
               <p>Jogos</p>
               <p>Alura</p>
               <p>JavaScript</p>
               <p>Python</p>
               <p>Reactjs</p>
               <p>NextJS</p>
            </div>
            <div className={styles.videos}>
               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               <Link href="/video">
                  <a className={styles.Card}>
                     <CardHome
                        src="/images/pick1.webp"
                        logo="/images/logos/logorocketseat.jpeg"
                        titulo="Homepage da Tesla com ReactJS | UI Clone #14"
                        canal="Rocketseat"
                        visualizacao="40 mil visualizações"
                        publicado="há 1 ano" />
                  </a>
               </Link>

               
            </div>

         </div>

      </div>
   )
}
