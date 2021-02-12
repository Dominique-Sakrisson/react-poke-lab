import React from 'react'
import {getType} from './MungeUtils.js'

export default class TypeDropdown extends React.Component {
    render() {
        const {
            Pokemon,
            onChange,
            sortRev

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
            <>
            <p>Choose a Pokemon type to sort by</p>
            <select onChange={onChange}>
                <option value='all'>All</option>
                {options}
            </select>
            </>
        )
    }
}
