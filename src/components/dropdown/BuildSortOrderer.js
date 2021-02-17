import React from 'react'

export default class SortOrderer extends React.Component {
    render() {
        return (
            <div className='sort-drop'>
                <p className='drop-info'>
                    Sort By Id
                </p>
                <select onChange={this.props.onChange}>
                    <option value='false'>Top Down</option>
                    <option value='true'>Bottom Up</option>
                </select>    
            </div>
        )
    }
}
