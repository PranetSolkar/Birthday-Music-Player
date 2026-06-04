import React from 'react'
import styles from './Arm.module.css'

const Arm = () => {
  return (
    <div>
        <div className={styles.arm}>
            <div className={styles.rectangle}>   
            </div>
            <div className={styles.line}>
            </div>

            <div className={styles.outerCircle}>
        
            </div>

            <div className={styles.pivot}>

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

            </div>

        </div>
      
    </div>
  )
}

export default Arm
