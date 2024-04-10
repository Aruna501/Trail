import React from 'react'

function Fields({ contact, index, handleUpdatename, handleUpdateemail, handleUpdatenumber, handleDelete }) {
  return (
    <div>
        
        <div key={index}>
                   <p>Name: {contact.name} 
                   <button onClick={()=>handleUpdatename(index)}>Edit</button>
                   </p> 
                   <p>Email: {contact.email}
                   <button onClick={()=>handleUpdateemail(index)}>Edit</button>
                   </p> 
                   <p>Phone: {contact.number}
                   <button onClick={()=>handleUpdatenumber(index)}>Edit</button>
                   </p>
                   <button  onClick={() => handleDelete(contact.id)}> Delete</button>
               </div>
           
    </div>
  )
}

export default Fields