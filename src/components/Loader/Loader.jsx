import React from "react";
import { motion } from "framer-motion";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <motion.div
      className={styles.loader}
      initial={{ opacity: 1 }}
      exit={{
        opacity:0,
        scale:1.05,
        filter:"blur(8px)",
        transition:{
            duration:.8,
            ease:"easeInOut"
        }

      }}
    >
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 0.8,
        }}
      >
        <motion.div 
            className={styles.vinyl}
            initial={{
                rotate:-90,
                scale:.8
            }}
            animate={{
                rotate:360,
                scale:1
            }}
            transition={{

                rotate:{
                    duration:2,
                    ease:"linear",
                    repeat:Infinity
                },

                scale:{
                    duration:.6
                }

            }}
        >
          <div className={styles.grooves}>
            <div className={styles.label}>
              ♪
            </div>
          </div>
        </motion.div>

        <motion.h1
          className={styles.title}
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: .5,
            duration: .7,
          }}
        >
          Harmony
        </motion.h1>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: .9,
            duration: .6,
          }}
        >
          [Loading Memories...]
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Loader;
