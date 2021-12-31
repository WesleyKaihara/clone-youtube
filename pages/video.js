import styles from '../styles/video.module.css';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import ShareIcon from '@mui/icons-material/Share';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FilterListIcon from '@mui/icons-material/FilterList';
import Image from 'next/image';
import Comentario from '../components/comentario';
export default function Video() {
    return (
        <div className={styles.video}>

            <div className={styles.video_content}>
                <div className={styles.video_main}>
                    <iframe width="100%" height="370" src="https://www.youtube.com/embed/Mf4Se4ZGcG8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <h1 className={styles.video_title}>Homepage da Tesla com ReactJS | UI Clone #14</h1>
                    <div className={styles.info_content}>
                        <p>50.285 visualizações</p>

                        <div className={styles.info} title='Marcar como "Gostei"'>
                            <div className={styles.info_item}>
                                <ThumbUpIcon /><p>5 MIL</p>
                            </div>
                            <div className={styles.info_item} title='Marcar como "Não gostei"'>
                                <ThumbDownOffAltIcon /><p>NÃO GOSTEI</p>
                            </div>

                            <div className={styles.info_item} title='Compartilhar'>
                                <ShareIcon /><p>COMPARTILHAR</p>
                            </div>

                            <div className={styles.info_item} title='Salvar'>
                                <LibraryAddIcon /><p>SALVAR</p>
                            </div>
                            <div className={styles.info_item}>
                                <MoreHorizIcon />
                            </div>
                        </div>
                    </div>
                    <hr></hr>


                    <div className={styles.canal_info}>
                        <div className={styles.canal_sobre}>
                            <div>
                                <Image
                                    src="/images/logos/logorocketseat.jpeg"
                                    width={40}
                                    height={40}
                                    className={styles.canal_img} />
                            </div>
                            <div className={styles.canal_title}>
                                <h1 className={styles.canal_name} title='Rocketseat'>Rocketseat</h1>
                                <p className={styles.canal_sub}>244 mil inscritos</p>
                            </div>
                        </div>
                        <input value="Inscrever-se" type="button" className={styles.inscrever} />

                    </div>

                    <div className={styles.desc}>
                        <p>Faala dev!<br />
                            Vamos recriar a homepage da Tesla com ReactJS!
                        </p>
                        <input type="button" value="MOSTRAR MAIS" className={styles.mostrarmais} />
                    </div>
                    <hr></hr>
                    <div className={styles.filtrocomentarios}>
                        <h2 className={styles.filtrocomentarios_text}> 784 comentários</h2>
                        <div className={styles.filtro} title="Classificar comentários">
                            <FilterListIcon /><h2 className={styles.filtrocomentarios_text}>  ORDENAR POR</h2>
                        </div>
                    </div>
                    <div className={styles.addcomentario}>
                        <Image
                            src="/images/cachorro.jpg"
                            width={40}
                            height={40}
                            className={styles.canal_img} />
                        <input type="text" placeholder='Adicionar um comentário público..' className={styles.addcomentario_input} />
                    </div>
                    <div className={styles.comentario}>
                        <Comentario/>
                        <Comentario/>
                        <Comentario/>
                        <Comentario/>
                        <Comentario/>
                        <Comentario/>
                    </div>
                </div>  {/*Componente central*/}

                <div>

                </div>
            </div>

        </div>
    )
}