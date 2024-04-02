import React, { useState } from 'react'
import data from './Data'
import './Menu.scss'
import Menuchild from './Menuchild';

function Menu() {

    const [menuinfo, setMenuinfo] = useState(data);
    const [filterdata, setFilterdata] = useState(menuinfo);

    const category = menuinfo.map(d=>d.category)
    const uniqueCategory = [...new Set(category)]
    uniqueCategory.unshift('All')
    // console.log(uniqueCategory);

    const handleTab = (input) =>{
        if (input==="All"){
            setFilterdata(menuinfo);
            return;
        }
        const datafilter = menuinfo.filter(d=>d.category===input)
        setFilterdata(datafilter);
    }

  return (
    <div className='container ex-7'>
        <div className='menu-container'>
        <div className='menu-card'>
        <h1>Our Menu
        <div className='underline'></div>
        </h1>
        <div className='menu-nav'>
        {uniqueCategory.map((input,i)=><button key={i} onClick={()=>handleTab(input)} >{input}</button>)}
        </div>
        <div className='row'>
        {filterdata.map(d=>
        <Menuchild img={d.img} title={d.title} price={d.price} desc={d.desc} />
        )
        }
        </div>
    </div>
    </div>
    </div>
  )
}

export default Menu

