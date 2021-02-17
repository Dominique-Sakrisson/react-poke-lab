import React from 'react'
import {getType} from '../../MungeUtils.js'

export default class TypeDropdown extends React.Component {
    render() {
        const {
            Pokemon,
            onChange,
            value,
            

        } = this.props;
        
        const selectTypeArray = new Set(Pokemon.map( (poke) => {
            return getType(poke); 
        }));

        let sortedSelectArray = Array.from(selectTypeArray);
        sortedSelectArray = sortedSelectArray.sort();

        let options = new Set();
        sortedSelectArray.map((option)=> {
             return options.add(<option key={option.id} value={option}>{option}</option>);
        })

        return (
            <div className='sort-drop'>
            <p className='drop-info'>Choose a Pokemon type to sort by</p>
            <select onChange={onChange} value={value}>
                <option value='all'>All</option>
                {options}
            </select>
            </div>
        )
    }
}
