import { INCREMENT, DECREMENT, CHANGE_THEME, ASYNC_BTN, ENABLE_BUTTONS, DISABLE_BUTTONS } from './types'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function decrement() {
  return {
    type: DECREMENT
  }
}

export function enableButtons() {
  return {
    type: ENABLE_BUTTONS
  }
}

export function disableButtons() {
  return {
    type: DISABLE_BUTTONS
  }
}

export function changeTheme(newTheme) {
  return {
    type: CHANGE_THEME,
    payload: newTheme
  }
}

export function asyncIncrement() {
  return function (dispatch) {
    // dispatch({ type: ASYNC_BTN, payload: 'on' })
    dispatch(disableButtons())
    setTimeout(() => {
      dispatch({ type: INCREMENT })
      dispatch(enableButtons())
      // dispatch({ type: ASYNC_BTN, payload: 'off' })
    }, 1500)
  }
}