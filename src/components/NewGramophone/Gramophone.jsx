import React from 'react'
import styles from'./Gramophone.module.css'
import Arm from '../ToneArm/Arm'
import Controls from './Controls'
import Player from './Player'

const Gramophone = (props) => {
  return (
  <div className={styles.gramophoneWrapper}>

   
    <div className={styles.container}>
      <div className={styles.base}>
        <div className={styles.baseTop}>
          <div className={styles.leftRound}>
            <div className={styles.leftRound1}>
              <div className={styles.leftRound2}>
              </div>
            </div>
          </div>
        </div>
        
        <Arm
          isPlaying={props.isPlaying}
          // discRotation={props.discRotation}
          audioRef={props.audioRef}
          setIsPlaying={props.setIsPlaying}
          toneArmControls={props.toneArmControls}
        />
        
        <div className={styles.middleTemp}>
          <Player 
            currentSong={props.currentSong} 
            isPlaying={props.isPlaying} 
            setCurrentSong={props.setCurrentSong} 
            setNewSong={props.setNewSong} 
            newSong={props.newSong}
            isReturning={props.isReturning}
            setIsReturning={props.setIsReturning}
            
            playerControls={props.playerControls}
            setIsPlaying={props.setIsPlaying}
            toggleMusic={props.toggleMusic}

            // hideCollection={props.hideCollection}
            />
        </div>

        <div className={styles.baseBottom}>
          <div className={styles.bottomLeft}>
            <div className={styles.leftCircle}>
            </div>
            <div className={styles.leftSquare}>
              <div className={styles.leftInnerSquare}>
              </div>
            </div>
          </div>

          <div className={styles.bottomRight}>
            <div className={styles.volume}>
              <div className={styles.volume1}>
                <div className={styles.volumeSquare}>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      <div className={styles.player}>

        <Controls 
          isPlaying={props.isPlaying} 
          toggleMusic={props.toggleMusic} 
          previousSong={props.previousSong} 
          nextSong={props.nextSong} 
          handleSeek={props.handleSeek} 
          handleVolume={props.handleVolume} 
          formatTime={props.formatTime}
          currentTime={props.currentTime}
          duration={props.duration}
          currentVolume={props.currentVolume}
          currentTitle={props.currentTitle}
          currentArtist={props.currentArtist}

          fadeTitle={props.fadeTitle}
        />

      </div>
      
    </div>

  </div>   
  )
}

export default Gramophone
