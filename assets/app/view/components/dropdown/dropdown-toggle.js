import React from 'react'
import PropTypes from 'prop-types'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { dropdownOperations } from 'redux/dropdown'

export class DropdownToggle extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    dropdownId: PropTypes.string.isRequired,
    showDropdown: PropTypes.func.isRequired,
  }

  onToggleClick = (event) => {
    const { dropdownId, showDropdown } = this.props

    event.preventDefault()
    event.stopPropagation()

    showDropdown(dropdownId)
  }

  render () {
    const { children, dropdownId } = this.props

    return (
      <button className='button button--primary'
        data-dropdown-id={dropdownId}
        onClick={this.onToggleClick}>
        {children}
      </button>
    )
  }
}

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...dropdownOperations
}, dispatch)

export default connect(null, mapDispachToProps)(DropdownToggle)
