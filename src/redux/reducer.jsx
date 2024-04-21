//initial state
import { INCREAMENT } from "./constants";
import { DECREAMENT } from "./constants";
import { RESET } from "./constants";
import { INCREAMENTCHILD4 } from "./constants";

const initialState={
    count: 3,
    count4: 0,
    name: 'Raj'
}

//creating reducer

const reducer = (state=initialState, action) => {
switch(action.type){
    case 'INCREAMENT': 
    return {...state, count: state.count+1}
    case 'INCREAMENTCHILD4': 
    return {...state, count4: state.count4+1}
    case 'DECREAMENT': 
    return {...state, count: state.count-1}
    case 'RESET': 
    return {...state, count: 3}
    default:
        return state;
}
}

export default reducer