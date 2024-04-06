import React from 'react'
import './Nav.css'

function Welcomemessage(props) {
    const { componentName } = props;

  return (
    <div>
        <h1 className='welcome-container'>Welcome to the {componentName} page</h1>
    </div>
  )
}

export default Welcomemessage