import React from 'react'
import transition from '../transition'
import ImgDrag from './comp/ImgDrag'
import {motion} from "framer-motion"



const Contact = () => {
  return (
    <div>
            <motion.h1
              
              initial={{opacity:0}}
              animate={{opacity:1}}
              transition={{duration: 1.2, ease: [0.22, 1, 0.36, 1]}}
              >
              contact
            </motion.h1>
            
          <ImgDrag className="primary"></ImgDrag>
          <ImgDrag className="secondary"></ImgDrag>
          <ImgDrag className="tercera"></ImgDrag>
          <ImgDrag className="cuarta"></ImgDrag>
          <ImgDrag className="quinta"></ImgDrag>
    </div>
    
  )
}

export default transition(Contact);