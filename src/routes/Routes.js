import React from 'react'
import HomePage from '../HomePage.js'
import SearchPage from '../SearchPage.js'
import '../styles/App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from '../components/Header.js'

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
