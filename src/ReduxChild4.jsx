import React from 'react'
import {connect} from 'react-redux'
import resetCount from './redux/reset'
import increamentChild from './redux/increamentChild4'

function ReduxChild4({count, name, increamentChild, resetCount}) {
  return (
      <div>
        <div>ReduxChild {count}</div>
    <div>Name is {name}</div>
    <button onClick={resetCount}>Reset</button>
    <button onClick={increamentChild}>Increament</button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
      count: state.count4,
      name: state.name
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      increamentChild: () => dispatch(increamentChild()),
        resetCount: () => dispatch(resetCount()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxChild4)