import React from 'react'
import PropTypes from 'prop-types'

export default class DropdownContent extends React.Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render () {
    const { children } = this.props

    return (
      <div className='dropdown-content'>
        {children}
      </div>
    )
  }
}
