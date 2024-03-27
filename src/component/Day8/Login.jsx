import React, { useState } from 'react'
import './Login.css'

function Login() {

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState()
    const [submitted, setSubmitted] = useState(false)
    const [showAge, setShowAge] = useState(false);

    

    const handleSubmit = () => {
    if (!firstname || !lastname) {
        alert('Please fill in all fields');
      } else {
        setSubmitted(true);
      }
    };

    const handleReset = () => {
        setFirstname('');
        setLastname('');
        setAge('');
        setSubmitted(false);
        setShowAge(false);
      };

      const handleShowAge = () => {
                setShowAge(true); 
              };

      const handleHideAge = () => {
        setShowAge(false);
      }

  return (
    <div className='container'>
        <div className='login-container'>
{!submitted && (
<div className='login-btn'>
        <div>
<label> First Name </label>
        <input type="text" name="firstname" value={firstname} onChange={e => setFirstname(e.target.value)}  />
      </div>
      <div>
      <label> Last Name </label>
      <input type="text" name="lastname" value={lastname} onChange={e => setLastname(e.target.value)}  />
            </div>
            <div>
      <label> Age </label>
      <input type="number" name="age" value={age} onChange={e => setAge(e.target.value)}  />
      </div>
      <div className='btn-aln'>
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={handleReset}>Reset</button>
      </div>
      </div>
      )

}
      </div>
      <div className='login-container'>
          {
          !showAge &&
<div>
    {submitted && 
    <div>
       <p> Name: {firstname} {lastname} </p>
       <div className='btn-aln'>
       {age && <button onClick={handleShowAge}>Show Age</button>}
       <button onClick={handleReset}>Reset</button>
       </div>
           </div>
    }
</div>
}
</div>

<div className='login-container'>
    {showAge && 
    <div>
         <p> Name: {firstname} {lastname} </p>
       <p>Age: {age}</p>
       <div className='btn-aln'>
       <button onClick={handleHideAge}>Hide Age</button>
       <button onClick={handleReset}>Reset</button>
       </div>
    </div>
    }
</div>
      
    </div>
  )
}

export default Login