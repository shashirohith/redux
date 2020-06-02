const redux = require('redux')
const reduxLogger = require('redux-logger')
const createStore = redux.createStore
const combineReducers = redux.combineReducers
const applyMiddleware = redux.applyMiddleware
const logger = reduxLogger.createLogger()

const BUY_CAKE = 'BUY_CAKE'
const Give_Cake = 'Give Cake'
const BUY_ICECREAM = 'BUY_ICECREAM'
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function GiveCake() {
    return {
        type: Give_Cake,
        info: 'Give redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

//initial state
const initialCakeState = {
    numOfCakes: 10
}

const initialIceCreamState = {
    numOfIceCreams: 20
}
const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }
        case Give_Cake: return {
            ...state,
            numOfCakes: state.numOfCakes + 1
        }
        default: return state
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddleware(logger))
console.log('initial state', store.getState())
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(GiveCake())
store.dispatch(buyIceCream())
unsubscribe()




