import React from 'react'
import styles from './VinylDisc.module.css'
import { motion } from "framer-motion";

const VinylDisc = (props) => {      //either write props in the argument or {song, onClick} and to use them song.title & onClick = {onClick}

  const isSelected = props.currentSong?.id === props.song.id;


  return (
    <div className={styles.parent}>
      <div className={styles.vinyl}>
        {!isSelected && (
          <motion.div 
            layoutId={`song-${props.song.id}`} 
            onClick={props.onClick} 
            className={styles.outerDisc}

           
            // transition={{
            //     duration: 3
            // }}
            
            >
            <div className={styles.grooves}>
              <div className={styles.innerCircle1}>
                <div className={styles.img}>
                  <img src={props.song.img} alt="song cover" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* <div className={styles.vinylTitle}>
          <h2>{props.song.title}</h2>
          <p>{props.song.artist}</p>
        </div> */}
      </div>

      <div className={styles.vinylTitle}>
          <h2>{props.song.title}</h2>
          <p>{props.song.artist}</p>
        </div>


    </div>
    
  )
}

export default VinylDisc
