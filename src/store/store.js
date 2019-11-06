import {createStore,applyMiddleware} from 'redux'

import reduce from './reduce'
import state from './state'
import thunk from 'redux-thunk'

export default createStore(reduce,state,applyMiddleware(thunk));