import React from 'react'
import Toprated from './Toprated'
import {useState} from 'react'
import Welcome from './Welcome'


const Freetrial = () => {
    const [next,setNext] =useState(false)
console.log(next)
  return (
    <div>
          {next? <Welcome/>:<Toprated setNext={setNext}/>}
       
    </div>
  )
}

export default Freetrial