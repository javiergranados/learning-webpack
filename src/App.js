import React from 'react'
import Wrapper from './hoc/Wrapper'
import { Link, Route } from 'react-router-dom'
import Users from './containers/Users'
import asyncComponent from './hoc/asyncComponent'

const AsyncPizza = asyncComponent(() => {
  return import('./containers/Pizza')
})

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <div>
          <Link to='/'>Users</Link>
          <Link to='/pizza'>Pizza</Link>
        </div>
        <div>
          <Route path='/' exact component={Users} />
          <Route path='/pizza' component={AsyncPizza} />
        </div>
      </Wrapper>
    )
  }
}
