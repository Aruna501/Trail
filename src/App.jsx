import React, {useState} from 'react'
import Dashboard from './Dashboard';
import Login from './Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  return (
    <div>
      { isAuthenticated ? (<Dashboard setIsAuthenticated={setIsAuthenticated} />
      ):(
          <Login setIsAuthenticated={setIsAuthenticated} />
      )
      }
    </div>
  )
}

export default App