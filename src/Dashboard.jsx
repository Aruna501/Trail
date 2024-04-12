import React, { useState, useEffect } from 'react'
import Addpage from './Addpage';
import Editpage from './Editpage';
import EmployeeList from './EmployeeList'

    function Dashboard({setIsAuthenticated }) {  
        const [data, setData] = useState(EmployeeList);
        const [showeditform, setShoweditform] = useState(false)
        const [index, setIndex] = useState()

        const [showform, setShowform] = useState(false)
        const [newEmployee, setNewEmployee] = useState({});

      
  
      useEffect(() => {
        setData(JSON.parse(localStorage.getItem('data')));
      }, []);
    
  const handleDelete = (id) => {
        const updatedData = data.filter(employee => employee.id !== id);
        localStorage.setItem('data', JSON.stringify(updatedData));
        setData(updatedData);
  };

  

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('is_authenticated', 'false');
}


const handleAddpage =()=>{
  setShowform(true)
}

const handleInputChange = (e) => {
  const { name, value } = e.target;
  setNewEmployee(prevState => ({
      ...prevState,
      [name]: value
  }));
};

const handleAddEmployee = () => {
  if (!newEmployee.firstName || !newEmployee.lastName || !newEmployee.email || !newEmployee.salary || !newEmployee.date) {
    alert('Please fill in all fields');
}
  else{
    const id = data.length+1; 
    const newEmployeeWithId = { ...newEmployee, id }; 
    setData([...data, newEmployeeWithId]);
    localStorage.setItem('data', JSON.stringify([...data, newEmployeeWithId]));
  setShowform(false);
  setNewEmployee({
      id: '',
      firstName: '',
      lastName: '',
      email: '',
      salary: '',
      date: ''
  });
}
};


const handleUpdate = (index) => {
  setIndex(index)
    setNewEmployee(data[index]);
    setShoweditform(true);
};

const handleEdit = () => {
    const newData = [...data];
    newData[index] = newEmployee;
  setData(newData);
  localStorage.setItem('data', JSON.stringify(newData));
  setShoweditform(false);
};


  return (
    <div>
        <div>
      <h2>Employee Management Software</h2>
      <button onClick={handleAddpage}>Add Employee</button>
      <button onClick={handleLogout}>Logout</button>
      {showform ? (<Addpage newEmployee={newEmployee} 
      handleInputChange={handleInputChange} 
      handleAddEmployee={handleAddEmployee}
      setShowform={setShowform}
       />
      ): (!showeditform ? (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Date</th>
            <th colSpan="2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((employee, index) => (
              
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.firstName}</td>
              <td>{employee.lastName}</td>
              <td>{employee.email}</td>
              <td>{employee.salary}</td>
              <td>{employee.date}</td>
              <td>
                  <button onClick={()=>handleUpdate(index)}>Edit</button>
                  </td>
                                <td>
              <button onClick={()=>handleDelete(employee.id)}>Delete</button>
                  </td>
            </tr>
                      ))}
        </tbody>
      </table>)
      :
      (<Editpage newEmployee={newEmployee} 
        handleInputChange={handleInputChange} 
        handleEdit={handleEdit}
        setShoweditform={setShoweditform}
        index={index}
        />
    ))}
      
    
    </div>
    </div>
  )
}

export default Dashboard