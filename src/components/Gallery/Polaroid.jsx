import React from 'react'
import { motion } from 'framer-motion'
import styles from './Polaroid.module.css'

const Polaroid = ({photo}) => {
    
  return (
    <motion.div 
        className={styles.polaroid}
        
        drag
        dragMomentum={false}
        style={{
            top: photo.top,
            left: photo.left,
            rotate: photo.rotate,
            width: photo.divwidth,
            height: photo.divheight
        }}
        animate={{
            y: [0, -10, 0]
        }}
        transition={{
            duration: photo.floatSpeed,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        >

        <img 
            src={photo.src} 
            alt="" 
            style={{
                // width: photo.width,
                height: photo.height
            }}

        />
        <p className={styles.caption}>
            {photo.caption}
        </p>
      
    </motion.div>
  )
}

export default Polaroid
