import React from 'react'
import HomeCarousel from './HOMECarousel'



export default function HeroSection() {
  return (
    <div  className = " grid grid-cols-12 container p-4 max-w-6xl mx-auto gap-4  " > 
        <div className = " col-span-8"> 
            <HomeCarousel/>
        </div>
       
        <div className = " col-span-4">
             <p>I WILLI WORK ON YOU LATER </p>
        </div>
        
        </div>
  )
}
