import React, { useState } from 'react'
import './Peopleinfo.scss'

function Peopleinfo() {

const [datainfo,setDatainfo] = useState(
    [
        {
          id: 1,
          name: 'Bertie Yates',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
        },
        {
          id: 2,
          name: 'Hester Hogan',
          age: 32,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
        },
        {
          id: 3,
          name: 'Larry Little',
          age: 36,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
        },
        {
          id: 4,
          name: 'Sean Walsh',
          age: 34,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
        },
        {
          id: 5,
          name: 'Lola Gardner',
          age: 29,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
        },
      ]
      
)

  return (
      <div className='container'>
    <div className='ex5'>
    <div className='bck'>
    <div className='main-card'>
        
    <h3>{datainfo.length} birthdays days</h3>
        {datainfo.map(data => (
          <div className='data-card'>            
            <div className='img-card'>
                <img src={data.image}/>
                </div>
                <div className='cus-info'>
            <h4>{data.name}</h4>
            <p className='age-card'> {data.age} years</p>
            </div>
            </div>
        )
        )
}
<button>Clear All</button>
</div>
</div>
    </div>
    </div>
  )
}

export default Peopleinfo