import React from 'react'
import styles from './Gallery.module.css'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'
import Polaroid from './Polaroid'

import paradiseCover from '../../assets/VinylImages/coldplay_paradise.jpg'
import dusty from '../../assets/VinylImages/dusty.jpeg'
import paradise1 from '../../assets/VinylImages/paradise1.jpeg'

const Gallery = () => {

    console.log("Gallery rendered");
    

    const photos = [
    {
        src: paradiseCover,
        caption:"Best Day ❤️",
        top:"20%",
        left:"10%",
        rotate:-8,
        floatSpeed:4,
        width:"220px",
        height:"280px"
    },

    {
        src: dusty,
        caption:"Goa Trip",
        top:"50%",
        left:"20%",
        rotate:6,
        floatSpeed:5,
        width:"220px",
        height:"280px"
    },

    {
        src: paradise1,
        caption:"Memories",
        top:"30%",
        left:"60%",
        rotate:-4,
        floatSpeed:3,
        width:"220px",
        height:"280px"
    }
    ];
    // console.log(photos);
    console.log("gallery rendered")

  return (
    <div className={styles.galleryContainer}>
        <motion.h1
            className={styles.heading}
            // initial={{
            //     clipPath:"inset(0 100% 0 0)"
            // }}
            // animate={{
            //     clipPath:"inset(0 0% 0 0)"
            // }}
            // transition={{
            // duration: 5,
            // ease: "easeInOut"
            // }}
            >
            <motion.span 
                initial={{ clipPath:"inset(0 100% 0 0)" }}
                animate={{ clipPath:"inset(0 0% 0 0)" }}
                transition={{ delay:3, duration:3 }}
                >
                    Happy
            </motion.span>

            <motion.span
                initial={{ clipPath:"inset(0 100% 0 0)" }}
                animate={{ clipPath:"inset(0 0% 0 0)" }}
                transition={{ delay:6, duration:3 }}
                >
                    Birthday
            </motion.span>  

            <motion.span
                initial={{ clipPath:"inset(0 100% 0 0)" }}
                animate={{ clipPath:"inset(0 0% 0 0)" }}
                transition={{ delay:9, duration:3 }}
                >
                    John Wick
            </motion.span>

            <motion.div 
                className={styles.message1}
                
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    delay:13,
                    duration:5
                }}
                >
                <p className={styles.message1Title}>Bhagwan kare...</p> 
                <p className={styles.message1Content1}>
                    Tere life mai itna happiness aaye ki..... 🎂</p> 
                <p className={styles.message1Content2}>
                    Monday suddha Friday sarkha vatava.😉</p>    
                    
                
            </motion.div>
            <motion.div 
                className={styles.message2}
                
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{
                    delay:13,
                    duration:5
                }}
                >
                <p className={styles.message2Title}>Developer's Note</p>
                <p className={styles.message2P1}>Sleep schedule sacrifice kiya hai...Aur bugs ke sath friendship....</p>
                <p className={styles.message2P2}>Just to see you smile.</p>

            </motion.div>
        </motion.h1>

        <motion.div 
            className={styles.photoArea}

            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{
                delay:20,
                duration:7
            }}
            >

                {/* {photos.map(()=>(
                    <motion.div>
                        <img src='src/assets/VinylImages/coldplay_paradise.jpg' alt="photo" />
                    </motion.div>

                ))} */}
                {photos.map((photo)=>(
                    <Polaroid photo={photo} />
                    ))
                }

        </motion.div>
      
    </div>
  )
}

export default Gallery
