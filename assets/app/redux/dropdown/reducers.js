import types from './types'

const initialState = {
  visibleDropdownId: null
}

export default function (state = initialState, action) {
  switch (action.type) {
  case types.SET:
    return {
      ...state,
      visibleDropdownId: action.visibleDropdownId
    }
  default:
    return state
  }
}
