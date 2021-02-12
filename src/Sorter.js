import React from 'react'
// import {alphaSort, alphaSortReverse, typeSort,} from './MungeUtils.js'

export default class Sorter extends React.Component {
    render() {
        const {
            Pokemon,
            onChange

        } = this.props;

        function getType(poke) {
           return poke.type_1;
        }

        const selectTypeArray = new Set(Pokemon.map( (poke) => {
            // poke.key = poke._id;
            return getType(poke); 
        }));

        let sortedSelectArray = Array.from(selectTypeArray);
        sortedSelectArray = sortedSelectArray.sort();

        let options = new Set();

        for(let option of sortedSelectArray){
            options.add(<option key={option._id} value={option}>{option}</option>);
        }
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
