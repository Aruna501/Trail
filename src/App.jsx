import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Home';
import About from './About';
import Profile from './Profile';
import Contact from './Contact';
import Projects from './Projects';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage';
import Welcomemessage from './Welcomemessage';



function App() {

  return (

    <div className="nav-main-page">
    <BrowserRouter>
                <Navbar />
      <Switch>
      <Route exact path="/" render={(props) => (
      <> <Home /> <Welcomemessage componentName="Home" /> </> )
      } />
        <Route path="/about" render={(props) => ( <>
        <About /> <Welcomemessage componentName="About" /> </>
        )} />
        <Route path="/profile" render={(props) => ( <>
        <Profile /> <Welcomemessage componentName="Profile" /> </>
        )} />
        <Route path="/contact" render={(props) => ( <>
        <Contact /> <Welcomemessage componentName="Contact" /> </>
        )} />
        <Route path="/projects" render={(props) => ( <>
        <Projects /> <Welcomemessage componentName="Projects" /> </>
        )} />
          <Route path='*'>
          <ErrorPage />
        </Route>

      </Switch>
          </BrowserRouter>
          </div>
  )
}

export default App