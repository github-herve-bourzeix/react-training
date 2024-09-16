import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import { BeerDescription } from './BeerDescription'

describe('<BeerDescription/>', () => {
  it('should render without crashing', () => {
    shallow(<BeerDescription/>)
  })
  it('should display a description', () => {
    const desc = 'lorem ipsum'
    const wrapper = shallow(<BeerDescription description={desc}/>)
    expect(wrapper
      .find("[data-ut='description']")
      .first().text()).to.equal(desc)
  })
})
