import React from 'react'
import "./Home.css"
import {motion} from "framer-motion"
import transition from '../transition'
import Marquee from './comp/Marquee'
import Spin from './comp/Spin'
import SvgGrafitti from './SvgGrafitti'



const Home = () => {
  return (
    <div className='Home'>

  <Spin/>
  <SvgGrafitti></SvgGrafitti>
   <Marquee/>
    
   
    <sectionHome></sectionHome>
   

    
   
    </div>
    
  )
}

export default  transition(Home);