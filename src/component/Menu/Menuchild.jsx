import React from 'react'

function Menuchild(props) {

    const {img, title, price, desc} = props;

  return (
    <div className='col-6'>
        <div className='order-card d-flex'>
            <div>
            <img src={img} />
            </div>
            <div className='order-menu'>
            <div className='order-info'>
            <h5 className='card-title'>{title}</h5> 
            <p className='card-price'>${price}</p>
            </div>
            <div className='menu-info'>{desc}</div>
        </div>
        </div>
    </div>
  )
}

export default Menuchild