import React from 'react'

import {Provider} from 'react-redux'
import ReduxChild from './ReduxChild'
import ReduxChild2 from './ReduxChild2'
import store from './redux/store'
import ReduxChild3 from './ReduxChild3'
import ReduxChild4 from './ReduxChild4'


function App() {
  return (

    <Provider store={store}>
    <div>App</div>
    <ReduxChild />
    <ReduxChild2 />
    <ReduxChild3 />
    <ReduxChild4 />
    </Provider>
  )
}

export default App