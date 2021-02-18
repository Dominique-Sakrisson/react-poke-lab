import React from 'react'
import {getAbility} from '../../MungeUtils.js'

export default class AbilityDropdown extends React.Component {
    render() {
        const {
            Pokemon,
            onChange,
            value,
          

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
            <div className='sort-drop'>
                    <p className='drop-info' >Choose a Pokemon ability to sort by</p>
                <select onChange={onChange} value={value}>
                    {/* <option value='all'>All</option> */}
                    {options}
                </select>
            </div>
        )
    }
}
