import React, { useState } from 'react'
import data from './Data'

function Crypto() {

    const[userdata, setUserdata] = useState(data);


  return (
    <div className='bg-black text-white py-10'>
      <div className="flex flex-col items-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#00e7fd' }}>Cryptocurrency Tracker</h1>
        <img src='https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png' alt="Edit" />
        <div className="mt-10">


        <div className="md:hidden text-xs w-96 border border-sky-400 border-solid border-2">
        <div className='pt-3 pb-3' style={{ background: '#016a75' }}>
        {userdata.map((user)=>
        <div>
          <div>
      <h4 className="py-3 px-3 row-span-2 text-left">Coin Type</h4>
      <p className="flex items-center px-3 pb-3"> <img src={user.currency_logo} alt={user.currency_name} width='30px' height='auto'/> 
      <span className='align-top' style={{ marginLeft: '0.5rem' }}> {user.currency_name} </span></p>
      </div>
      <div>
      <h4>USD</h4>
      <p>{user.usd_value}</p>
      </div>
      <div>
      <h4>EURO</h4>
      <p>{user.euro_value}</p>
      </div>
      </div>
        )}
    </div>
    </div>

        <table className="hidden md:inline-table text-xs w-96 border border-sky-400 border-solid border-2">
  <thead >
      <tr className='pt-3 pb-3' style={{ background: '#016a75' }}>
      <th className="py-3 px-3 row-span-2 text-left">Coin Type</th>
      <th className="text-left">USD</th>
      <th className="text-left">EURO</th>
    </tr>
  </thead>
  <tbody>
  {userdata.map((user)=>
    <tr className='pb-10 mt-10'>
      <td className="flex items-center px-3 pb-3"> <img src={user.currency_logo} alt={user.currency_name} width='30px' height='auto'/> 
      <span className='align-top' style={{ marginLeft: '0.5rem' }}> {user.currency_name} </span></td>
      <td className='align-top'>{user.usd_value}</td>
      <td className='align-top'>{user.euro_value}</td>
    </tr>
  )}
    
  </tbody>
</table>
          </div>
          </div>
    </div>
  )
}

export default Crypto