import React from 'react'
import styles from './Gallery.module.css'
import { motion , useAnimationControls } from 'framer-motion'
import { div } from 'framer-motion/client'
import Polaroid from './Polaroid'

// import paradiseCover from '../../assets/VinylImages/coldplay_paradise.jpg'
// import dusty from '../../assets/VinylImages/dusty.jpeg'
// import paradise1 from '../../assets/VinylImages/paradise1.jpeg'

const Gallery = (props) => {

    const photos = [
    {
        src: "/Photos/AnushkaBirthday1.jpg",
        caption:"Best Day ❤️",
        top:"20%",
        left:"10%",
        rotate:-8,
        floatSpeed:4,
        width:"220px",
        height:"280px"
    },

    {
        src: "/Photos/Siddhi.jpg",
        caption:"Goa Trip",
        top:"50%",
        left:"20%",
        rotate:6,
        floatSpeed:5,
        width:"220px",
        height:"280px"
    },

    {
        src: "/Photos/SiddhiBirthday.jpg",
        caption:"Memories",
        top:"30%",
        left:"60%",
        rotate:-4,
        floatSpeed:3,
        width:"220px",
        height:"280px"
    }
    ];

  return (

    <div className={styles.galleryContainer}>
        <div className={styles.galleryWrapper}>
            <motion.h1
                className={styles.heading}
                >
                <motion.span 
                    initial={{ clipPath:"inset(0 100% 0 0)" }}
                    animate={props.happyControls}
                    >
                        Happy
                </motion.span>

                <motion.span
                    initial={{ clipPath:"inset(0 100% 0 0)" }}
                    animate={props.birthdayControls}
                    >
                        Birthday
                </motion.span>  

                <motion.span
                    className={styles.name}
                    initial={{ clipPath:"inset(0 100% 0 0)" }}
                    animate={props.nameControls}
                    >
                        Siddhi Bangar
                </motion.span>
            </motion.h1>

            <div className={styles.messageWrapper}>
                <motion.div 
                    className={styles.message1}
                    
                    initial={{opacity:0}}
                    animate={props.messageControls}
                    >

                    <p className={styles.message1Title}>Bhagwan kare...</p> 
                    <p className={styles.message1Content1}>
                        Tere life mai itna happiness aaye ki.....</p> 
                    <p className={styles.message1Content2}>
                        Monday suddha Friday sarkha vatava.😉</p>    
                        
                </motion.div>
                <motion.div 
                    className={styles.message2}
                    
                    initial={{opacity:0}}
                    animate={props.messageControls}
                    >
                    <p className={styles.message2Title}>Developer's Note</p>
                    <p className={styles.message2P1}>Sleep schedule sacrifice kiya hai...Aur bugs ke sath friendship....</p>
                    <p className={styles.message2P2}>Just to see you smile.</p>

                </motion.div>
            </div>

            <motion.div 
                className={styles.photoArea}

                initial={{opacity:0}}
                animate={props.photoControls}
                >

                    
                    {photos.map((photo,index)=>(
                        <Polaroid key={index} photo={photo} />
                        ))
                    }

            </motion.div>
        </div> 
    </div>
  )
}

export default Gallery
