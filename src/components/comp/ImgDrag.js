import React from 'react'
import {motion} from "framer-motion"
import "./ImgDrag.css"

const imgVariants = {
  hidden:{
    opacity: 0.5,
    width:100,
  
  },

  visible:{ 
    opacity: 1,
    width:200,
    transition:{
    duration:0.8,
    }

  }
}


const ImgDrag = (props) => {
  return (
    <motion.div 
    
     className={`imgdrag ${props.className}`}
      variants={imgVariants}
      drag
      dragConstraints={{
        top:  -20,
        left: -20,
        right: -20,
        bottom: -20,
      }}
      whileTap={{  width:350, height:400}}
      initial="hidden"
      animate="visible"
    >
    {props.children}
    </motion.div>
    
  )
}

export default ImgDrag