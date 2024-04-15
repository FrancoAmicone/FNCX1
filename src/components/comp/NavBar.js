import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"

const NavBar = () => {
  return (
    <div className='nav'>
        <motion.div className='logo'
         whileHover={{ scale: 1.6 }}
         whileTap={{ scale: 0.9 }}>
            <Link className='nav-link' to='/' >FNCMICN</Link>
        </motion.div>
        <div className='nav-links'>
            <motion.div className='nav-items'
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}>
                <Link className='nav-link' to='/'>Home</Link>
            </motion.div>
            <motion.div className='nav-items'
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}>
                <Link className='nav-link' to='./about'>About</Link>
            </motion.div>
            <motion.div className='nav-items'
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}>
                <Link className='nav-link' to='./contact'>Contact</Link>
            </motion.div>
        </div>
    </div>
  )
}

export default NavBar