import React from 'react'

function Editpage({index, newEmployee, handleInputChange, handleEdit, setShoweditform}) {
  return (
    <div>
        <div>
            <div>
                <h2>Update Employee</h2>
                <label>ID</label>
                <input type="text" name="id" value={newEmployee.id} onChange={handleInputChange} />
                <label>First Name</label>
                <input type="text" name="firstName" value={newEmployee.firstName} onChange={handleInputChange} />
                <label>Last Name</label>
                <input type="text" name="lastName" value={newEmployee.lastName} onChange={handleInputChange} />
                <label>Email</label>
                <input type="text" name="email" value={newEmployee.email} onChange={handleInputChange} />
                <label>Salary</label>
                <input type="number" name="salary" value={newEmployee.salary} onChange={handleInputChange} />
                <label>Date</label>
                <input type="date" name="date" value={newEmployee.date} onChange={handleInputChange} />
                <button onClick={handleEdit}>Update</button>
                <button onClick={() => setShoweditform(false)}>Cancel</button>
            </div>
        </div>
    </div>
  )
}

export default Editpage