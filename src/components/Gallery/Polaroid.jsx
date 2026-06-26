import React from 'react'
import { motion } from 'framer-motion'
import styles from './Polaroid.module.css'

const Polaroid = ({photo}) => {
    console.log(photo.src)
  return (
    <motion.div 
        className={styles.polaroid}
        
        drag
        dragMomentum={false}
        style={{
            top: photo.top,
            left: photo.left,
            rotate: photo.rotate,
            width: photo.width,
            height: photo.height
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

        <img src={photo.src} alt="" />
        <p className={styles.caption}>
            {photo.caption}
        </p>
      
    </motion.div>
  )
}

export default Polaroid
