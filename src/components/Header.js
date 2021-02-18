import React from 'react'
import{ NavLink, withRouter } from 'react-router-dom'

export default withRouter( class Header extends React.Component {
    render(){
        return(
            <>
                <header className='header'>
                    <div className='nav-div'>
                        <NavLink className='nav-link' exact activeClassName='selected' to='/'>
                            HomePage
                        </NavLink>
                        {
                            this.props.location.pathname !== '/pokemon' &&
                            <NavLink className='nav-link' exact activeClassName='selected' to='/pokemon'>
                                Pokemon
                            </NavLink>
                        }
                            <NavLink className='nav-link' exact activeClassName='selected' to='/pokemon/pokeName'>
                                Pokemon Details
                            </NavLink>
                        
                    </div>
                </header>
            </>
        )
    }
})