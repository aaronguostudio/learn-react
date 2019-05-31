import React from 'react'
import Ionicon from 'react-ionicons'
import PropTypes from 'prop-types'

const PriceList = ({ items, categories, onModifyItem, onDeleteItem }) => {
  return (
    <ul className="list-group list-group-flush">
      {
        items.map(item => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={item.id}
          >
            <span className="col">
              <Ionicon
                className="rounded-circle"
                fontSize="30px"
                style={{ backgroundColor: '#007bff', padding: '5px' }}
                color='#FFF'
                icon={categories[item.id].iconName}
              />
            </span>
            <span className="col badge badge-primary">
              {categories[item.id].name}
            </span>
            <span className="col">
              {item.title}
            </span>
            <span className="col font-weight-bold">
              {(categories[item.id].type === 'income') ? '+' : '-'} {item.price}
            </span>
            <span className="col">
              {item.date}
            </span>
            <button
              className="btn btn-primary"
              onClick={() => onModifyItem(item)}
            >Edit</button>
            <button
              className="btn btn-danger"
              onClick={() => onDeleteItem(item)}
            >Delete</button>
          </li>
        ))
      }
    </ul>
  )
}

PriceList.propTypes = {
  items: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  onModifyItem: PropTypes.func.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
}

PriceList.defaultProps = {
  items: [],
  categories: {},
  onModifyItem: () => {},
  onDeleteItem: () => {},
}

export default PriceList