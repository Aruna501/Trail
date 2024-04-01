import React, { useState } from 'react'

function Counter() {

    const [value, setValue] = useState(5)
    const [count, setCount] = useState("")

    const handleChange = (e)=>{
      setCount(parseInt(e.target.value));
    }

    const handleIncreament = () => {
      setValue(value + count)
      setCount("");
    }

    const handleDecreament = () => {
      setValue(value - count)
      setCount("");
    }

  return (
    <div>
        <h3>Count: {value} <span><input type="number" name="count" value={count} onChange={handleChange}/></span></h3>
       <button onClick={handleIncreament}>Increament</button>
       <button onClick={handleDecreament}>Decreament</button>
    </div>
  )
}

export default Counter