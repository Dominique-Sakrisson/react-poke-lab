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
import DetailPage from '../DetailPage.js'

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
                    path='/pokemon'
                        exact
                        render={(routerProps) => <SearchPage{...routerProps}/>}
                />
                <Route 
                    path='/pokemon/:pokeName'
                        exact
                        render={(routerProps) => <DetailPage {...routerProps} />}
                />
            </Switch>
        </Router>
        )
    }
}
