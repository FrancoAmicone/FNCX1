import React from "react";
// 1. Importing framer-motion
import { motion } from "framer-motion";

import "./Marquee.css"

const marqueeVariants = {
  animate: {
    x: [-10000, 0],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 18,
        ease: "linear",
      },
    },
  },
};

const Marquee = () => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
            <h3>We are to be, a cycle destined to repeat everything gone to be accord to the gods plans, gods plans,
                 gods plans We are to be, destined to repeat, circle, everything gone to be, circle, everything gone
                 to be accord to the gods plans, gods plans.
                 We are to be, a cycle destined to repeat everything gone to be accord to the gods plans, gods plans,
                 gods plans We are to be, destined to repeat, circle, everything gone to be, circle, everything gone
                 to be accord to the gods plans, gods plans.
                 Este es un gitpush
               </h3>
   
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;