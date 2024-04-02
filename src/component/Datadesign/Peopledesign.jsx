import React from 'react'

function Peopledesign(props) {
    const {name, age, image} = props;
  return (
    <div>
        <div className='data-card'>            
            <div className='img-card'>
                <img src={image}/>
                </div>
                <div className='cus-info'>
            <h4>{name}</h4>
            <p className='age-card'> {age} years</p>
            </div>
            </div>
    </div>
  )
}

export default Peopledesign