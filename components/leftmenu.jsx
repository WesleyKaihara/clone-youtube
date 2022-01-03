import styles from "../styles/leftmenu.module.css";
import Link from "next/link";
import Image from "next/image";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HistoryIcon from "@mui/icons-material/History";
import SmartDisplayIcon from "@mui/icons-material/SmartDisplay";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


console.log(styles)
export default function Leftmenu() {
  return (
    <div className={styles.leftmenu}>
      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <HomeIcon /> Início
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <ExploreIcon /> Explorar
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <SubscriptionsIcon /> Inscrições
          </a>
        </Link>
      </div>
      <br />
      <hr />
      <br />
      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <VideoLibraryIcon /> Biblioteca
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <HistoryIcon /> Histórico
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <SmartDisplayIcon /> Seus vídeos
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <AccessTimeIcon /> Assistir mais tarde
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <PlaylistPlayIcon /> Curso-Nextjs
          </a>
        </Link>
      </div>

      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <KeyboardArrowDownIcon /> Mostrar mais
          </a>
        </Link>
      </div>

      <br />
      <hr />
      <br />

      <h1 className={styles.title}>Inscrições</h1>
      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <Image src="/images/logos/logorocketseat.jpeg"
            width={30}
            height={30}
            className={styles.canal_img}/> Rocketseat
          </a>
        </Link>
      </div>
      <div className={styles.btn}>
        <Link href="/">
          <a className={styles.btn_text}>
            <Image src="/images/logos/logorocketseat.jpeg"
            width={30}
            height={30}
            className={styles.canal_img}/> Rocketseat
          </a>
        </Link>
      </div>

    </div>
  );
}
