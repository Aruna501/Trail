import React, { Component } from 'react'
import  Form  from './component/dayfive/Form'
import Contactform from './component/dayfive/Contactform'
import Count from './component/dayfive/Count'
import Loginform from './component/dayfive/Loginform'
import Print from './component/dayfive/Print'
import Registerform from './component/dayfive/Registerform'
import Student from './component/dayfive/Student'
import Employee from './component/daysix/Employee'
import Task1 from './component/daysix/Task1'
import Vote from './component/daysix/Vote'
import Welcome from './component/daysix/Welcome'
import Assignment from './component/Dayseven/Assignment'
import Travellingform from './component/Dayseven/Travellingform'
import Login from './component/Day8/Login'
import Counter from './component/Day9/Counter'
import Imgsrch from './component/Imagesearch/Imgsrch'
import Peopleinfo from './component/Datadesign/Peopleinfo'
import Tour from './component/Tours/Tour'
import Accordian from './component/Accordian/Accordian'
import Menu from './component/Menu/Menu'


class App extends Component {

  // state={
  //   title: "Sandwich, IceCream, Milkshake ",
  //   name: "Aruna",
  //   salary: 20000,
    
  //       }

       
  render(){
  return (
    <div>
      {/********************************************* * Day5****************************** */}
{/* <Print /> */}
{/* <Student /> */}
{/* <Count /> */}
 {/* <Registerform /> */}
{/* <Contactform /> */}
{/* <Loginform /> */}
{/* <Form /> */}

{/********************************************* * Day6****************************** */}
      {/* <Task1 title={this.state.title} /> */}
      {/* <Employee name={this.state.name} salary={this.state.salary} /> */}

      {/* <h2 style={{textAlign: "center"}}>Voting</h2>
      <Vote name="C" />
      <Vote name="C++" />
      <Vote name="Java" />
      <Vote name="Python" /> */}
      {/* <Welcome /> */}
      {/********************************************* * Day7****************************** */}
      {/* <Assignment /> */}
      {/* <Travellingform /> */}
      {/********************************************* * Day8****************************** */}
      {/* <Login /> */}
{/********************************************* * Day8****************************** */}
{/* <Counter /> */}
{/********************************************* * Imagesearch ****************************** */}
{/* <Imgsrch /> */}
{/* <Peopleinfo /> */}
{/* <Tour /> */}
{/* <Accordian /> */}
<Menu />
    </div>
  )
}
}

export default App