import actions from './actions'

const set = actions.set

const showDropdown = (visibleDropdownId) => (dispatch) => {
  dispatch(set(visibleDropdownId))

  return Promise.resolve()
}

const hideDropdown = () => (dispatch) => {
  dispatch(set(null))

  return Promise.resolve()
}

export default {
  showDropdown,
  hideDropdown
}
