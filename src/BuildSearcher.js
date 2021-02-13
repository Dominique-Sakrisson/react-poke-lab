import React from 'react'

export default class Searcher extends React.Component {
    render() {
        return (
            <div className='searcher-div'>
            <div className='search-info'>
                <p>Search By Name</p>
            </div>
                
                <input onChange={this.props.onChange} placeholder='Search for a pokemon'></input>
            </div>
        )
    }
}
