import React from 'react'
import styles from './Controls.module.css'
import {SkipBack, SkipForward, Play, Pause} from 'lucide-react'
import { motion } from "framer-motion";

const Controls = (props) => {
  return (
    <div className={styles.parentControls}>

        <div className={styles.title}>
            <motion.div animate={props.fadeTitle}>
            <h2>{props.currentTitle}</h2>
            </motion.div>
            <motion.div animate={props.fadeTitle}>
            <p>{props.currentArtist}</p>
            </motion.div>
        </div>


        <div className={styles.control}>

            <div className={styles.controlBtn}>
                {/* <button onClick={props.previousSong} className={styles.back}><SkipBack /></button> */}
                {/* <p className={styles.company}>Harmony Vinyl Co.</p> */}
                <div className={`${styles.visualizer} ${
                                    props.isPlaying ? styles.playing : ""
                                }`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <button onClick={props.toggleMusic} className={styles.play_pause}> {props.isPlaying? <Pause/> : <Play />} </button>
                {/* <button onClick={props.nextSong} className={styles.next}><SkipForward /></button> */}
                {/* <button onClick={props.previousSong} className={styles.back}>Vintage Vinyl Co.</button> */}
                <div className={`${styles.visualizer2} ${
                                    props.isPlaying ? styles.playing : ""
                                }`}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                
            </div>


            <div className={styles.range1}>
                <span>{props.formatTime(props.currentTime)}</span>
                <input 
                type="range" 
                min="0"
                max={props.duration}
                value={props.currentTime}
                onChange={props.handleSeek}
                className={styles.progressBar}
                />
                <span>{props.formatTime(props.duration)}</span>
            </div>

        </div>

        {/* <label>Volume: {props.currentVolume}</label>
        <input 
            type="range" 
            min="0"
            max="1"
            step="0.01"
            onChange={props.handleVolume}
        /> */}
      
    </div>
  )
}

export default Controls
