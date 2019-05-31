import React, { Component } from 'react';
import PriceList from '../components/PriceList'
import ViewTab from '../components/ViewTab'
import Total from '../components/Total'
import '../App.css';
import { VIEWS, DEFAULT_VIEW, CATEGORIES } from '../config'
import { parseToYearAndMonth } from '../utility'

const items = [
  {
    id: 1,
    title: 'Travel',
    price: 100,
    date: '2019-10-10',
    cid: '1'
  },
  {
    id: 2,
    title: 'Travel',
    price: 100,
    date: '2019-10-10',
    cid: '2'
  }
]

class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      items,
      currentDate: parseToYearAndMonth(),
      currentView: DEFAULT_VIEW,
      categories: CATEGORIES,
    }
  }

  changeView = (view) => {
    this.setState({ currentView: view})
  }
  changeDate = () => {}
  createItem = () => {}
  modifyItem = () => {}
  deleteItem = () => {}

  render () {
    const { currentView, currentDate, items, categories } = this.state

    return (
      <React.Fragment>
        <header>
          {currentDate.year} {currentDate.month}
          <Total />
        </header>
        <ViewTab
          items={VIEWS}
          activeTab={currentView}
          onTabChange={this.changeView}
        />
        <div>
          <PriceList
            items={items}
            categories={categories}
            onModifyItem={this.onModifyItem}
            onDeleteItem={this.onDeleteItem}
          />
        </div>
      </React.Fragment>
    )
  }

}

export default Home;
