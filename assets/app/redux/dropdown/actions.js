import types from './types'

const set = (visibleDropdownId) => ({
  type: types.SET,
  visibleDropdownId
})

export default {
  set
}
