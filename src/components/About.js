import React from 'react'
import transition from '../transition'
import {motion} from "framer-motion"

const About = () => {
  return (
    <div>
        <motion.h1
        
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
        >
        About
        </motion.h1>
    </div>
  )
}

export default transition(About);