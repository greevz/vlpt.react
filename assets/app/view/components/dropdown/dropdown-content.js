import React from 'react'
import PropTypes from 'prop-types'

export default class DropdownContent extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    secondary: PropTypes.bool
  }

  render () {
    const { children, secondary } = this.props
    const classes = ['dropdown-content']

    if (secondary) { classes.push('dropdown-content--secondary') }

    return (
      <div className={classes.join(' ')}>
        {children}
      </div>
    )
  }
}
