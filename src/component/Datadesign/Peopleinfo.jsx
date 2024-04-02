import React, { useState } from 'react'
import data from './Data'
import Peopledesign from './Peopledesign'

import './Peopleinfo.scss'

function Peopleinfo() {

const [datainfo,setDatainfo] = useState(data)

const clearAll = () => {
  setDatainfo([]);

}

  return (
          <div className='ex5'>
    <div className='bck'>
    <div className='main-card'>
        
    <h3>{datainfo.length} Birthdays Days</h3>
        {datainfo.map((person, index) => (
          <Peopledesign key={index} name={person.name} age={person.age} image={person.image} />
        )
        )
}
<button onClick={clearAll}>Clear All</button>
</div>
</div>
    </div>
      )
}

export default Peopleinfo