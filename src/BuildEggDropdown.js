import React from 'react'
import {getEgg} from './MungeUtils.js'

export default class TypeDropdown extends React.Component {
    render() {
        const {
            Pokemon,
            onChange,
            sortRev

        } = this.props;
        
        const selectEggArray = new Set(Pokemon.map( (poke) => {
            return getEgg(poke); 
        }));

        let sortedSelectArray = Array.from(selectEggArray);
        sortedSelectArray = sortedSelectArray.sort();

        let options = new Set();
        sortedSelectArray.map((option)=> {
            return options.add(<option key={option.id} value={option}>{option}</option>);
        })
        
        return (
            <>
            <p className='egg-string'>Choose a Pokemon egg group to sort by</p>
            <select onChange={onChange}>
                <option value='all'>All</option>
                {options}
            </select>
            </>
        )
    }
}
