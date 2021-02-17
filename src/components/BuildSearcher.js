import React from 'react'

export default class Searcher extends React.Component {
    render() {
        return (
            <div className='searcher-div'>
                <p className='drop-info'>Type in A Poke Name</p>
                <input onChange={this.props.onChange} placeholder='Search for a pokemon'></input>
            </div>
        )
    }
}
