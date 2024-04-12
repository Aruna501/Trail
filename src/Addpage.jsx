import React from 'react'

function Addpage({newEmployee, handleInputChange, handleAddEmployee, setShowform}) {
  return (
    <div>
    <div>
      <h1>Add Employee</h1>
      <div>
      
        <label>First Name</label>
        <input type="text" name="firstName" value={newEmployee.firstName} onChange={handleInputChange} />
                  </div>
                  <div>
      
        <label>Last Name</label>
        <input type="text" name="lastName" value={newEmployee.lastName} onChange={handleInputChange} />
                  </div>
                  <div>
      
        <label>Email</label>
        <input type="text" name="email" value={newEmployee.email} onChange={handleInputChange} />
                  </div>
                  <div>
      
        <label>Salary</label>
        <input type="number" name="salary" value={newEmployee.salary} onChange={handleInputChange} />
                  </div>
                  <div>
      
        <label>Date</label>
        <input type="date" name="date" value={newEmployee.date} onChange={handleInputChange} />
                  </div>
                  <button onClick={handleAddEmployee}>Add</button>
                    <button onClick={() => setShowform(false)}>Cancel</button>     
    </div></div>
  )
}

export default Addpage
