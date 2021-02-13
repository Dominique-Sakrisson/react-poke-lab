import React from 'react'
import {getAbility} from './MungeUtils.js'

export default class TypeDropdown extends React.Component {
    render() {
        const {
            Pokemon,
            onChange,
            sortRev

        } = this.props;
        
        const selectAbilityArray = new Set(Pokemon.map( (poke) => {
            return getAbility(poke); 
        }));

        let sortedSelectArray = Array.from(selectAbilityArray);
        sortedSelectArray = sortedSelectArray.sort();

        let options = new Set();
        sortedSelectArray.map((option)=> {
             return options.add(<option key={option.id} value={option}>{option}</option>);
        })

        return (
            <>
            <p>Choose a Pokemon ability to sort by</p>
            <select onChange={onChange}>
                <option value='all'>All</option>
                {options}
            </select>
            </>
        )
    }
}
