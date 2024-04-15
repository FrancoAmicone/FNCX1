import {easeIn, motion} from "framer-motion"
import spin from "../../utils/imgs/Spin250.png"




const spinVariants={
   
   visible:{
    rotate:0
   },
    animate: {
      rotate: [360, 0],
      transition: {
        opacity:{
            duration:0.8,
            ease: easeIn,
        },
        rotate: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
}

const Spin = () => {
  return (

    <motion.div 
    className='spinWheel' 
    variants={spinVariants} 
    animate="animate"   
    whileHover={{    
      scale:0.8,
      transition:{
          duration:1
      }}}>

        <img src={spin}></img>
        
    </motion.div>
  )
}

export default Spin
