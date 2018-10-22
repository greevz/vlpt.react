import { createSelector } from 'reselect'

const getVisibleDropdownId = ({ dropdown }) => dropdown.visibleDropdownId
const getVisibleDropdownIdState = createSelector([ getVisibleDropdownId ], (visibleDropdownId) => visibleDropdownId)

export default {
  getVisibleDropdownIdState
}
