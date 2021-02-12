import React from 'react'
import HomePage from './HomePage.js'
import SearchPage from './SearchPage.js'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header.js'

export default class Routes extends React.Component {
    render() {
        return (
        <Router>
            <Header />
            <Switch>
                <Route 
                    path='/'
                        exact
                        render={(routerProps) => <HomePage{...routerProps}/>}
                />
                <Route 
                    path='/search'
                        exact
                        render={(routerProps) => <SearchPage{...routerProps}/>}
                />
            </Switch>
        </Router>
        )
    }
}
