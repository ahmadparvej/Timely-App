import React,{useState} from 'react'

import Loginform from "./Loginform"
import style from "../signup/signup.module.css"


const Toprated = ({setNext}) => {

  return (
    <div>
        {/* heder-start */}
       
        <div className={style.header}>
            <div >
            <a><img src="https://d1vbcromo72rmd.cloudfront.net/assets/memory_logo-2b0e14e1b9caec121a1ba0e1fc28d171afe00a656378f9bb2b6ff43d6273e8b3.svg"/></a>
            </div>
            <div>
            <a><img src="https://d1vbcromo72rmd.cloudfront.net/assets/timely_icon_with_bg-fff8d0307178d5b60fec3a9eda6e91f90d873f80680991fc1dde04e5be6d27bb.svg"/></a>
            </div>
       
        </div>
          {/* heder-end */}

        <div className={style.maindiv}>
            <div>
             <div className={style.mydiv}>
                <h2>Top rated time tracking</h2>
                <div className={style.icondiv}>
                    <div><img src="https://d1vbcromo72rmd.cloudfront.net/assets/join/g2_badge_leader_2022-bbf17b5daa62a554f0d55c4af7e835f9896cf15fdd80e72261c40a8744894fb3.svg"/></div>
                    <div><img src="https://d1vbcromo72rmd.cloudfront.net/assets/join/g2_badge_users_love_us-4fca521cb6d80c30d02e3df6bd0013f5395fb3ae22e81b3e3608e258d8feba63.svg"/></div>
                    <div><img src="https://d1vbcromo72rmd.cloudfront.net/assets/join/g2_badge_usability_2022-f0f22abd17173b279e3d0568aa55411971f2b3f5840cc89ae913be4aebee42a7.svg"/></div>
                </div>
                <div className={style.quotes}>
                    <div>
                        <h1>“The best way to measure exactly where your time goes.”</h1>
                        <h3 >Brian,<span style={{color:"grey"}}> Accountant</span></h3>
                    </div>
                    <div>
                        <h1>“Timely takes a load off my brain.”</h1>
                        <h3>Erik,<span style={{color:"grey"}}>  Digital Designer</span></h3>
                    </div>
                    <div>
                        <h1>“Easy to use and I love the project level summaries.”</h1>
                        <h3>Jonathan,<span style={{color:"grey"}}> Software Engineer</span></h3>
                    </div>
                </div>
             </div>
            </div>
            {/* *********** */}
            <div className={style.formdiv}>
            <Loginform />
            </div>
        </div>
        {/* <div className={style.copyright}><p>Copyright 2022 Memory AS</p></div> */}
        
        
       
    </div>
  )
}

export default Toprated