import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

function Budgetpage({budget}) {

    const [isBudget, setIsBudget] = useState([])
    const [name, setName] = useState('')
    const [cost, setCost] = useState('')
    const [expensesInfo, setExpensesInfo] = useState(false)
    const [spentCost, setSpentCost]=useState(0)
    const [searchQuery, setSearchQuery] = useState('');

    const handleAddvalue = () => {
        const newExpenseCost = parseFloat(cost);
                       setIsBudget([...isBudget, {Name: name, Cost: cost}]);
        setExpensesInfo(true)
        setName('');
        setCost('');
       setSpentCost(spentCost + newExpenseCost);
    }

    const remainingBudget = budget - spentCost;
    
    const handleSearch = e => {
        e.preventDefault();
        setSearchQuery(e.target.value);
    }

    const filteredExpenses = isBudget.filter(expense=>expense.Name.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <div>
         <div>
  <Button variant="secondary">Budget: £{budget}</Button>
            <Button variant="secondary">Remaining: £{remainingBudget}</Button>
            <Button  variant="secondary">Spent so far: £{spentCost}</Button>
            </div>
<div>
    <div>
    {expensesInfo && 
    <div>
    <h4>Expenses</h4>
    <div>
    <input type="text" placeholder="Type to search...." onChange={handleSearch} value={searchQuery} />
    </div>
    {
    filteredExpenses.map((expenses, index) =>(
    <div key={index} style={{padding: '3px', margin:'10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid black' }}> 
    {expenses.Name}  
    <span style={{ backgroundColor: 'lightblue', padding: '3px'}}>£{expenses.Cost} </span>
    </div>
    ))
    }
    </div>
    }
    </div>
  <h4>Add Expenses</h4>
  <Form >
      <Row>
        <Col>
        <Form.Label>Name</Form.Label>
          <Form.Control type='text' value={name} onChange={e=>setName(e.target.value)}  />
        </Col>
        <Col>
        <Form.Label>Cost</Form.Label>
        <Form.Control type='number' value={cost} onChange={e=>setCost(e.target.value)}  />
        </Col>
      </Row>
      <Button onClick={handleAddvalue}>Add</Button>
    </Form>
</div>
    </div>
  )
}

export default Budgetpage