import React from 'react'
import {connect} from 'react-redux'
import decreamentCount from './redux/decreamentCount'

function ReduxChild3({decreamentCount}) {
  return (
    <div>ReduxChild
    <button  onClick={decreamentCount}> Decreament </button>
    </div>
  )
}


const mapDispatchToProps = (dispatch) => {
    return{
               decreamentCount: () => dispatch(decreamentCount())
    }

}

export default connect(null,mapDispatchToProps)(ReduxChild3)