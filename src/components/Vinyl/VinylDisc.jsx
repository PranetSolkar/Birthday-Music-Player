import React from 'react'
import styles from './VinylDisc.module.css'

const VinylDisc = (props) => {      //either write props in the argument or {song, onClick} and to use them song.title & onClick = {onClick}
  return (
    <div onClick={props.onClick} className={styles.vinyl}>
      <div className={styles.outerDisc}>
        <div className={styles.grooves}>
          <div className={styles.innerCircle1}>
            <div className={styles.img}>
              <img src={props.song.img} alt="song cover" />

            </div>

          </div>

        </div>

      </div>

      <div className={styles.vinylTitle}>
        <h2>{props.song.title}</h2>
        <p>{props.song.artist}</p>
      </div>
      
    </div>
  )
}

export default VinylDisc
