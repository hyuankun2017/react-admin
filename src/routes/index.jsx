import React, { Fragment } from 'react'
import { Route, Redirect } from 'react-router'
import { BrowserRouter, Switch } from 'react-router-dom'
import DevTools from 'mobx-react-devtools'
import { Provider } from 'mobx-react'
import stores from 'stores'

import Home from '@R/home'
import About from '@R/about'

const Routes = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
        </div>
    </BrowserRouter>
)

const App = () => (
    // <Provider {...stores}>
    //     <Routes />
    // </Provider>
    <Fragment>
        <Provider {...stores}>
            <Routes />
        </Provider>
        {
            process.env.NODE_ENV === 'development' ? (
                <DevTools />
            ) : null
        }
    </Fragment>
)

export default App
