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
        caption:"Best Moments Together ❤️",
        top:"20%",
        left:"11%",
        rotate:-8,
        floatSpeed:4,
        divwidth:"220px",
        divheight:"290px",
        // width: "200px",
        height: "220px"
    },

    {
        src: "/Photos/Siddhi.jpg",
        caption:"Birthday Queen 👑",
        top:"40%",
        left:"20%",
        rotate:6,
        floatSpeed:5,
        divwidth:"220px",
        divheight:"330px",
        // width: "200px",
        height: "260px"
    },

    {
        src: "/Photos/SiddhiBirthday.jpg",
        caption:"Keep Smiling 😊",
        top:"30%",
        left:"60%",
        rotate: 4,
        floatSpeed:3,
        divwidth:"220px",
        divheight:"300px",
        // width: "200px",
        height: "220px"
    },

    {
        src: "/Photos/Zeal1.jpg",
        caption:"Best Moments Together ❤️",
        top:"20%",
        left:"45%",
        rotate:-8,
        floatSpeed:3,
        divwidth:"220px",
        divheight:"300px",
        // width: "200px",
        height: "220px"
    },

    {
        src: "/Photos/AnushkaSiddhi.jpg",
        caption:"Some Smiles Never Fade 🌸",
        top:"20%",
        left:"-22%",
        rotate:17,
        floatSpeed:6,
        divwidth:"220px",
        divheight:"300px",
        // width: "200px",
        height: "220px"
    },

    {
        src: "/Photos/Zeal2.jpg",
        caption:"Laughter Never Ends 😂",
        top:"40%",
        left:"-4%",
        rotate:-9,
        floatSpeed:5,
        divwidth:"360px",
        divheight:"300px",
        // width: "200px",
        height: "220px"
    },

    {
        src: "/Photos/Zeal3.jpg",
        caption:"Zeal3",
        top:"30%",
        left:"30%",
        rotate:10,
        floatSpeed:6,
        divwidth:"280px",
        divheight:"300px",
        // width: "200px",
        height: "220px"
    },

    {
        src: "/Photos/AnushkaBirthday2.jpg",
        caption:"Forever Glowing ✨",
        top:"20%",
        left:"80%",
        rotate:5,
        floatSpeed:5,
        divwidth:"220px",
        divheight:"300px",
        // width: "200px",
        height: "220px"
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
