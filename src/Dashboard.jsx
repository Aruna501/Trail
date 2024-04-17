import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Budgetpage from './Budgetpage';


function Dashboard() {

  const [budget, setBudget] = useState();
  const [submitted, setSubmitted] = useState(false);

  const handleBudgetSubmit = () => {
    setSubmitted(true);
  };

  const handleBudgetChange = (e) => {
        setBudget(parseFloat(e.target.value));
  };

  return (
    <div className='container'>
      <div className="card flex-row">
  <img className="card-img-left" src="./react-budget-app.jpeg" alt="Card image cap" />
  <div className="card-body">
    <h4>My Budget Planner</h4>
    <div>
                      <div>
              {submitted ? ( <Budgetpage budget={budget} /> ) :
            (
              <div>
                <input type="number" placeholder='Enter your Budget' name={budget} value={budget} onChange={handleBudgetChange}/>
                <button onClick={handleBudgetSubmit}>Enter</button>
            </div>
            )}
            </div>
          
          </div>

  </div>
</div>



    </div>
  )
}

export default Dashboard