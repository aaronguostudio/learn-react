import React from 'react'
import PropTypes from 'prop-types'

const linkCllass = ( current, item ) => current === item ? 'active' : ''

const ViewTab = ({ activeTab, items, onTabChange }) => (
  <ul className="nav nav-tabs">
    { items.map(item => (
      <li className="nav-item" key={item}>
        <div
          className={`pointer nav-link ${linkCllass(activeTab, item)}`}
          onClick={() => onTabChange(item)}
        >
        {item}</div>
      </li>
    ))}
    
  </ul>
)

ViewTab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  onTabChange: PropTypes.func.isRequired,
}

ViewTab.defaultProps = {
  activeTab: '',
  items: [],
  onTabChange: () => {},
}
export default ViewTab