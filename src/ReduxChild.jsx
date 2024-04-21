import React from 'react'
import {connect} from 'react-redux'
import decreamentCount from './redux/decreamentCount'
import increamentCount from './redux/increamentCount'


function ReduxChild({count, name, increamentCount, decreamentCount}) {
  return (
      <div>
    <div>ReduxChild {count}</div>
    <div>Name is {name}</div>
    <button onClick={increamentCount}>Increament</button>
    <button onClick={decreamentCount}>Decreament</button>
    </div>
  )
}

const mapStateToProps = (state) => {
    return{
        count: state.count,
        name: state.name
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        increamentCount: () => dispatch(increamentCount()),
        decreamentCount: () => dispatch(decreamentCount())
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(ReduxChild)