import React from 'react'

export default class SortOrderer extends React.Component {
    render() {
        return (
            <div>
                Sort Order
                        <select onChange={this.props.onChange}>
                            <option value='false'>Normal</option>
                            <option value='true'>Reverse</option>
                        </select>    
            </div>
        )
    }
}
