import './dropdown.scss'

import { find } from 'lodash'
import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { dropdownOperations, dropdownSelectors } from 'redux/dropdown'

export class Dropdown extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    hideDropdown: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    visibleDropdownId: PropTypes.string,
  }

  constructor (props) {
    super(props)

    this.wrapperRef = React.createRef()

    this.onClickOutside = this.onClickOutside.bind(this)
  }

  componentDidMount () {
    document.addEventListener('click', this.onClickOutside)
    document.addEventListener('keyup', this.onKeyup)
  }

  componentWillUnmount () {
    document.removeEventListener('click', this.onClickOutside)
    document.removeEventListener('keyup', this.onKeyup)
  }

  onKeyup = ({ keyCode }) => {
    const { hideDropdown } = this.props

    if (keyCode === 27) {
      hideDropdown()
    }
  }

  onClickOutside = ({ target }) => {
    const { hideDropdown, visibleDropdownId } = this.props
    const { wrapperRef } = this
    const { dataset } = target

    if ((!wrapperRef || !wrapperRef.current) || !visibleDropdownId) { return }

    const isDropdownToggle = dataset && dataset.dropdownId
    const containsTarget = wrapperRef.current.contains(target)
    const dropdownToggleEls = document.getElementsByClassName('dropdown-toggle')
    const toggleContainsTarget = find(dropdownToggleEls, (dropdownToggleEl) => dropdownToggleEl.contains(target))

    if (
      !isDropdownToggle &&
      !toggleContainsTarget &&
      !containsTarget
    ) {
      hideDropdown()
    }
  }

  render () {
    const { children, id, visibleDropdownId } = this.props
    const dropdownVisible = visibleDropdownId && visibleDropdownId === id

    return (
      <React.Fragment>
        <CSSTransition
          in={dropdownVisible}
          timeout={200}
          classNames='dropdown'>
          <div id={id}
            className='dropdown'
            ref={this.wrapperRef}>
            <div className='ros-dropdown-topbar'>
              <div className='ros-dropdown-topbar-chevron' />
            </div>
            {children}
          </div>
        </CSSTransition>
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => ({
  visibleDropdownId: dropdownSelectors.getVisibleDropdownIdState(state)
})

const mapDispachToProps = (dispatch) => bindActionCreators({
  ...dropdownOperations
}, dispatch)

export default connect(mapStateToProps, mapDispachToProps)(Dropdown)
