import React from 'react'
import classes from './PizzaImage.css'
import pizzaPath from '../../assets/pizza.jpg'

const PizzaImage = props => (
  <div className={classes.pizzaImage}>
    <img src={pizzaPath} className={classes.pizzaImg} />
  </div>
)

export default PizzaImage
