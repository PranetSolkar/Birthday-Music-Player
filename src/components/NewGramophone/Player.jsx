import React from 'react'
import styles from './Player.module.css'
import { motion } from "framer-motion"; 

const Player = (props) => {
    const activeSong = props.currentSong || props.newSong

    if (!props.currentSong) return null;

    return (
        <motion.div
            // layoutId={`song-${props.currentSong.id}`}
            layoutId={`song-${activeSong.id}`}
            // onLayoutAnimationComplete={{
                
            // }}
            // animation={{
            //     rotate: props.isPlaying? 360 : 0 
            // }}
            // transition={{
            //     duration: 3,
            //     repeat: Infinity,
            //     ease: "linear" 
            // }}
            
            >
            <motion.div 
                // layoutId={`song-${props.currentSong.id}`} 
                className={styles.middleTemp}
                animate={props.playerControls}
                // animate={{
                //     rotate: props.isPlaying? 360 : 0 
                // }}
                // transition={{
                //     duration: 3,
                //     repeat: Infinity,
                //     ease: "linear" 
                // }}
                onAnimationComplete={()=>{

                    if(newSong){
                        setCurrentSong(newSong);
                        setNextSong(null);
                    }
                }}
                    
                
                >
                <div onClick={props.onClick} className={styles.outerDisc}>
                        <div className={styles.grooves}>
                            <div className={styles.innerCircle1}>
                            <div className={styles.img}>
                                <img src={props.currentSong.img} alt="song cover" />
                            </div>
                            </div>
                        </div>
                </div>

            </motion.div>
        </motion.div>
    )
}

export default Player
