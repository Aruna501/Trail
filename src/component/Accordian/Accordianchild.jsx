import React, { useState } from 'react'

function Accordianchild(props) {
    const {title, info} = props;
    const [toggleshow, setToggleshow] = useState(false);

  return (
    <div  className='tog-tit'>
        <div className='title-card'>
                      <h4 >{title}</h4>
                      <button className='tog-btn' onClick={()=>setToggleshow(!toggleshow)}>{toggleshow ? "-" : "+" }</button>
                      </div>
                      <div>
            
            {toggleshow && <p>{info}</p>}
            </div>
            
           </div>
  )
}

export default Accordianchild