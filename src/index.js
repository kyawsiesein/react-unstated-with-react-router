import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import Lists from './Lists'
import Home from './Home'
import {Provider} from 'unstated'
import './index.scss'

/**
 * Provider should wrap the browser router
 */

const App = () => {
  return (
    <Provider>
      <BrowserRouter>
        <div>
          <div className="nav">
            <Link to="/">Add new task</Link>
            <Link to="/results">Results</Link>
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/results" component={Lists} />
          </Switch>
        </div>
      </BrowserRouter>
    </Provider>
  )
}

render(<App />, document.getElementById('root'))
