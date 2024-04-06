import React, { useState, useEffect } from 'react'
import './Tour.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Async() {

const [showmore, setShowmore] = useState(false);
const [tour, setTour] = useState([ ])

// const fetchData = async () => {
//     try {
//         const response = await fetch('https://course-api.com/react-tours-project');
//         const data = await response.json();
//         setTour(data);
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// };

const fetchData = () => {
    fetch('https://course-api.com/react-tours-project')
    .then(response => response.json())
    .then(data => setTour(data))
};


useEffect(() => {
        fetchData();
}, []);


const handleDelete = (deletingTourlist) =>{
    const newTourlist = tour.filter((data) => data !== deletingTourlist);
    setTour(newTourlist);
}

const refreshButton = () => {
    if (tour.length === 0) {
        return (
            <button className='btn btn-primary' onClick={fetchData}>Refresh</button>
        );
    }
};
  return (
    <div className='container'>
        
    <h1 className="tour-container">Our Tours</h1>
    <div className='underline'></div>
    <div className="row">
    {tour.map(data=>(
        
        
            <div className="col-sm-12 col-md-6 col-lg-4">
                
                <div className="card-image">
                        <img src={data.image} alt={data.name} />
            <span>${data.price}</span>
            </div>
            <div className="card-content">
            <h5 className="card-title">{data.name}</h5>
                            <p className="card-description">
                                                            {showmore ? data.info : `${data.info.substring(0, 250)}...`}
                                        <span>   <button className="card-btn" onClick={()=>setShowmore(!showmore)}>
                {showmore ? "Show less" : "Read more"}
                </button></span>
                </p>
                                
                <div>
                        <button className='btn-card' onClick={()=>handleDelete(data)}>Not Interested</button>
                        </div>
        </div>
        </div>
        
    )
    )
    
    }
    {/* <button className='btn btn-primary' onClick={fetchData}>Refresh</button> */}
    </div>
    {refreshButton()}
</div>

  )
}

export default Async;