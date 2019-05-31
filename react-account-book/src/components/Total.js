import React from 'react'
import PropTypes from 'prop-types'

const Total = ({ income, outcome }) => (
  <div className="row">
    <div className="col income">Income: <span>{income}</span></div>
    <div className="col outcome">Outcome: <span>{outcome}</span></div>
  </div>
)

Total.propTypes = {
  income: PropTypes.number.isRequired,
  outcome: PropTypes.number.isRequired,
}

Total.defaultProps = {
  income: 0,
  outcome: 0,
}

export default Total