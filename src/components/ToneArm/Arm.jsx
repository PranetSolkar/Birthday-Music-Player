import React from 'react'
import styles from './Arm.module.css'
import { motion } from 'framer-motion'

const Arm = (props) => {

  return (
    <div>
        <div className={styles.arm}>
            <div className={styles.rectangle}>   
            </div>

            <div className={styles.line}>
            </div>

            <div className={styles.outerCircle}>
            </div>

            <motion.div     
                className={styles.pivot}
                animate={props.toneArmControls}
                onAnimationComplete={()=>{
                    props.audioRef.current.play();
                    props.setIsPlaying(true);
                }}
                
                >

                <div className={styles.armExtend}>
                    <div className={styles.extend1}>
                    </div>
                    
                    <div className={styles.extend2}>
                    </div>

                    <div className={styles.pin}>
                        <div className={styles.square}>
                        </div>

                        <div className={styles.insidePin}>
                        </div>
                    </div>
                </div>

            </motion.div>

        </div>
      
    </div>
  )
}

export default React.memo(Arm)
