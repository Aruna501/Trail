import React from 'react'

function Login({setIsAuthenticated}) {

    const handleClick = () => {
        setIsAuthenticated(true);
        } 

  return (
    <div>
        <h1 className='welcome-container'>Welcome to our Quiz Program</h1>
        <button className='welcome-btn' onClick={handleClick}> Get Started</button>
    </div>
  )
}

export default Login