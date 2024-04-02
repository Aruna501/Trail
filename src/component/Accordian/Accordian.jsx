import React, { useState } from 'react'
import Accordianchild from './Accordianchild'
import data from './Data'

import './Accordian.scss'

function Accordian() {

const [datainfo, setDatainfo]=useState(data)

  return (
    <div className='ex6'>
        <div className='mail-accord'>
            <div className='sub-accord'>
                <h2>Questions And Answers About Login</h2>
       <div>
        {datainfo.map((clinch, index)=>
        (
        <Accordianchild key={index} title={clinch.title} info={clinch.info} /> 
        )
        )
        }
        </div>
        </div>
    </div>
    </div>
  )
}

export default Accordian