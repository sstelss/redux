import { createStore, applyMiddleware, compose } from 'redux'
import { rootReducer } from './redux/rootReducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { increment, decrement, asyncIncrement, changeTheme } from './redux/actions'
import './styles.css'

const counter = document.getElementById('counter')
const addBtn = document.getElementById('add')
const subBtn = document.getElementById('sub')
const asyncBtn = document.getElementById('async')
const themeBtn = document.getElementById('theme')


// function logger(state) {
//   return function(next) {
//     return function(action) {
//       console.log('old state: ', state.getState())
//       console.log('action: ', action)
//       const newState = next(action)
//       console.log('newStat: ', newState)
//       return newState
//     }
//   }
// }

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk, logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)


addBtn.addEventListener('click', () => {
  store.dispatch(increment())
})

subBtn.addEventListener('click', () => {
  store.dispatch(decrement())
})

asyncBtn.addEventListener('click', () => {
  store.dispatch(asyncIncrement())
})

themeBtn.addEventListener('click', () => {
  const newTheme = document.body.classList.contains('light')
  ? 'dark'
  : 'light'
  store.dispatch(changeTheme(newTheme))
  // document.body.classList.toggle('dark')
})

store.subscribe(() => {
  const state = store.getState()
  counter.textContent = state.counter
  document.body.className = state.theme.value

  ;[addBtn, subBtn, asyncBtn, themeBtn].forEach(btn => {
    btn.disabled = state.theme.disabled
  })

  // addBtn.disabled = !state.activeButtons.add
  // subBtn.disabled = !state.activeButtons.sub
  // asyncBtn.disabled = !state.activeButtons.async
  // themeBtn.disabled = !state.activeButtons.theme
})

store.dispatch({type: 'INIT_APPLICATION'})