import React from 'react'
import styles from'./Gramophone.module.css'
import Arm from '../ToneArm/Arm'

const Gramophone = () => {
  return (
    <div className={styles.container}>
      {/* <h1>hello</h1> */}
      <div className={styles.base}>
        <div className={styles.baseTop}>
          <div className={styles.leftRound}>
            <div className={styles.leftRound1}>
              <div className={styles.leftRound2}>
              </div>
            </div>
          </div>
        </div>
        
        <Arm/>
        
        <div className={styles.middleTemp}>

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

      </div>
      
    </div>
  )
}

export default Gramophone
