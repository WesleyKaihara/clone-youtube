import Image from 'next/image'
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import style from '../styles/header.module.css'

export default function Header() {

    return (
        <div className={style.header}>
            <button className={style.menu}><MenuIcon className={style.menu_icon} /></button>
            <Image
                src="/images/logo.png"
                width={150}
                height={120}
                alt='logo' />
            <div className={style.pesquisar}>
                <form className={style.form}>
                    <input type="text" placeholder="Pesquisar" className={style.pesquisar_input} />
                    <button type='submit' className={style.pesquisar_btn} >
                        <SearchIcon />
                    </button>
                    <KeyboardVoiceIcon className={style.mic}/>
                </form>

            </div>
            <div className={style.right_icons}>
                <VideoCallIcon className={style.menu_icon} />
                <ViewModuleIcon className={style.menu_icon} />
                <NotificationsNoneIcon className={style.menu_icon} />
            </div>
            <Image 
            src="/images/cachorro.jpg"
            width={40}
            height={40}
            className={style.perfil}/>
        </div>
    )
}