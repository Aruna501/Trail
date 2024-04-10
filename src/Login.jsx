import React, { useState, useEffect } from 'react'
import Fields from './Fields'

import 'bootstrap/dist/css/bootstrap.css';
import { validateEmail } from './Util';



function Login() {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [data, setData] = useState([])

    const handleClick = () =>{
        if(!name | !email | !number )
        {
           alert(' Please fill in all fields')
        }
        else if (!validateEmail(email))
      { 
          alert("Please enter a valid email address");
    }
    else if( !number.match('[0-9]{10}') ){
        alert('Please provide valid phone number');
   }
   else if (data.some(contact => contact.email === email)) {
    alert('Email already taken');
} else if (data.some(contact => contact.number === number)) {
    alert('Phone number already taken');
}        else{
    const newtodo=[...data, {id: data.length + 1, name: name, email: email, number: number }]
        setData(newtodo)
        localStorage.setItem('data', JSON.stringify(newtodo));
                setName('');
                
        setEmail('');
        setNumber('');
    }
    
    }


    const handleUpdatename=(index)=>{
        const updatedtask = prompt('Update your task', data[index].name)
        let copiedData = [...data];
        copiedData[index].name = updatedtask;
        setData(copiedData);
        localStorage.setItem('data', JSON.stringify(copiedData));
      }

      const handleUpdateemail=(index)=>{
        const updatedtask = prompt('Update your task', data[index].email)
        if (!validateEmail(updatedtask))
      { 
          alert("Please enter a valid email address");
    }
    else{
        let copiedData = [...data];
        copiedData[index].email = updatedtask;
        setData(copiedData);
        localStorage.setItem('data', JSON.stringify(copiedData));
        }
      }
      
     const handleUpdatenumber =(index)=>{
        const updatedtask = prompt('Update your task', data[index].number)
        if( !(updatedtask.match('[0-9]{10}')) ){
            alert('Please provide a valid 10-digit phone number');
        }
        else{
        let copiedData = [...data];
        copiedData[index].number = updatedtask;
        setData(copiedData);
        localStorage.setItem('data', JSON.stringify(copiedData));
    }
         }

      const handleDelete=(id)=>{
            const updatedData=data.filter(contact=>contact.id!==id)
            localStorage.setItem('data', JSON.stringify(updatedData));
    setData(updatedData);
          }


          // Load TODOs from local storage on app startup
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('data'));
    if (storedTodos) {
      setData(storedTodos);
    }
  }, []);

  // Update local storage whenever TODOs change
//   useEffect(() => {
//     localStorage.setItem('data', JSON.stringify(data));
//   }, [data]);


  return (
    <div className='container'>
        <div className='login-main-container'>
        <h1>Contact Manager</h1>
        <div>
            <div>
            <label>Name</label>
            </div>
            <div>
            <input type='text' value={name} onChange={(e)=>setName(e.target.value)} />
            </div>
            <div>
            <label>Email</label>
            </div>
            <div>
            <input type='text' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </div>
            <div>
            <label>Number</label>
            </div>
            <div>
            <input type='number' value={number} onChange={(e)=>setNumber(e.target.value)} />
            </div>
            <button onClick={handleClick}>Add Contact</button>
        </div>
        {
           data.map((contact,index) => (
               <Fields contact={contact} 
               index={index}
               handleUpdatename={handleUpdatename}
    handleUpdateemail={handleUpdateemail}
    handleUpdatenumber={handleUpdatenumber}
    handleDelete={handleDelete}
    />
           ) )
        }
        
    </div>
    </div>
  )
}

export default Login