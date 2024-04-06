import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './Home'
import Team from './Team'
import Projects from './Projects'
import Calender from './Calender'
import Documents from './Documents'
import Sidebar from './Sidebar'
import Layout from './Layout';
import './Sidebar.css'




function App() {
  
  return (
    <div className='sidebar-container'>
    <BrowserRouter>
    <Layout />
    <Sidebar />
    <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/team" component={Team} />
    <Route path="/calender" component={Calender} />
    <Route path="/projects" component={Projects} />
    <Route path="/documents" component={Documents} />

    </Switch>
    </BrowserRouter>
    </div>
  )
}

export default App