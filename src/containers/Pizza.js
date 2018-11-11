import React from 'react'
import Wrapper from '../hoc/Wrapper'
import PizzaImage from '../components/PizzaImage/PizzaImage'

class Pizza extends React.Component {
  render() {
    return (
      <Wrapper>
        <h1>The Pizza</h1>
        <PizzaImage />
      </Wrapper>
    )
  }
}

export default Pizza
