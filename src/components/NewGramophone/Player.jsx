import React from 'react'
import styles from './Player.module.css'
import { motion } from "framer-motion"; 

const Player = (props) => {
    const activeSong = props.currentSong || props.newSong

    if (!props.currentSong) return null;
    // if (!activeSong) return null;

    return (
        <motion.div>
            <motion.div 
                className={styles.middleTemp}
                layoutId={`song-${props.currentSong.id}`} 
                // layoutId={`song-${activeSong.id}`} 
                onLayoutAnimationComplete={()=>{
                    // props.setIsPlaying(true)

                    // props.toggleMusic()
                    
                    // if(props.newSong){
                    //     props.setCurrentSong(props.newSong);
                    //     props.setNewSong(null);
                    //     console.log("hello")
                    // }

                    props.toggleMusic();
                    if(props.newSong){
                        props.setCurrentSong(props.newSong);
                        props.setNewSong(null);
                    }
                    // else{
                    //     props.toggleMusic();
                    // }
                    
                }}
                transition={{
                    duration: 2,
                    ease: "linear" 
                }}
                animate={props.playerControls}
                
                >
                <div onClick={props.onClick} className={styles.outerDisc}>
                        <div className={styles.grooves}>
                            <div className={styles.innerCircle1}>
                            <div className={styles.img}>
                                <img src={props.currentSong.img} alt="song cover" />
                                {/* <img src={activeSong.img} alt="song cover" /> */}
                            </div>
                            </div>
                        </div>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Player
