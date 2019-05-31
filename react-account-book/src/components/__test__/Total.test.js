import React from 'react'
import { shallow } from 'enzyme'
import Total from '../Total'

const props = {
  income: 2000,
  outcome: 3000
}

describe('test Total component', () => {
  it('component should render correct income and outcome number', () => {
    const wrapper = shallow(<Total {...props} />)
    expect(wrapper.find('.income span').text() * 1).toEqual(2000)
    expect(wrapper.find('.outcome span').text() * 1).toEqual(3000)
  })
})