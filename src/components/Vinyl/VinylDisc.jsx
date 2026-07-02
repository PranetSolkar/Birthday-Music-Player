import React from 'react'
import styles from './VinylDisc.module.css'
import { motion } from "framer-motion";

const VinylDisc = (props) => {      //either write props in the argument or {song, onClick} and to use them song.title & onClick = {onClick}

  const isSelected = props.currentSong?.id === props.song.id;


  return (
    <div className={styles.parent}
          style={{zIndex:isSelected ? 9999 : 1
          }}> 
      <div className={styles.wrapper}>

        <div className={styles.vinyl}>
          {!isSelected && (
            <motion.div 
              className={styles.outerDisc}
              layoutId={`song-${props.song.id}`} 
              onClick={props.onClick} 
              
              >
              <div className={styles.grooves}>
                <div className={styles.innerCircle1}>
                  <div className={styles.img}>
                    <img src={props.song.img} alt={props.song.alt} />
                  </div>
                </div>
              </div>
            </motion.div>
          )}

        </div>
        

        <div className={styles.vinylTitle}>
          <h2>{props.song.title}</h2>
          <p>{props.song.artist}</p>
        </div>

      </div>

    </div>
  )
}

export default VinylDisc
