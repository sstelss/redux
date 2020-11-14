import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT, CHANGE_THEME, ASYNC_BTN, DISABLE_BUTTONS, ENABLE_BUTTONS } from './types'

function counterReducer(state = 0, action) {
  if (action.type === INCREMENT) {
    return state + 1
  } else if (action.type === DECREMENT) {
    return state - 1
  }
  
  return state
}

const initialThemeState = {
  value: 'light',
  disabled: false
}

function themeReducer(state=initialThemeState, action) {
  switch (action.type) {
    case CHANGE_THEME:
      return { ...state, value: action.payload }
    case DISABLE_BUTTONS:
      return { ...state, disabled: true }
    case ENABLE_BUTTONS:
      return { ...state, disabled: false }
    default: return state
  }
}

// const initialActiveButtons = {
//   add: true,
//   sub: true,
//   async: true,
//   theme: true
// }
// function activeButtonsReducer(state=initialActiveButtons, action) {
//   switch(action.type) {
//     case ASYNC_BTN:
//       return {
//         add: action.payload === 'off',
//         sub: action.payload === 'off',
//         async: action.payload === 'off',
//         theme: action.payload === 'off'
//       }
//     default: return state
//   }
// }

export const rootReducer = combineReducers({
  counter: counterReducer,
  theme: themeReducer,
  // activeButtons: activeButtonsReducer
})