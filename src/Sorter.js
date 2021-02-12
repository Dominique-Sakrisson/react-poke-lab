import React from 'react'

export default class Sorter extends React.Component {
    render() {
        const {
            Pokemon
        } = this.props;

        function alphaSort(a,b) {
            let idA = a.pokemon.toUpperCase();
            let idB = b.pokemon.toUpperCase();
            if(idA < idB){
                return -1
            }
            if(idA > idB){
                return 1;
            }
            return 0; 
        }
        function alphaSortReverse(a,b){
            let idA = a.pokemon.toUpperCase();
            let idB = b.pokemon.toUpperCase();
            if(idA < idB){
                return 1
            }
            if(idA > idB){
                return -1;
            }
            return 0;
        }
        
        function typeSort(a,b) {
            let idA = a.type_1.toUpperCase();
            let idB = b.type_1.toUpperCase();
            if(idA < idB){
                return -1
            }
            if(idA > idB){
                return 1;
            }
            return 0; 
        }

        const pokemonAlphabetic = Pokemon.sort( (a, b) => {
            return alphaSort(a,b);
        })
        const pokemonReverse = Pokemon.sort((a,b) => {
            return alphaSortReverse(a,b);
        })

        const pokeTypeSort = Pokemon.sort((a,b)=>{
            return typeSort(a,b);
        })

        function getType(poke) {
           return poke.type_1;
        }
        const selectTypeArray = new Set(pokemonAlphabetic.map( (poke) => {
            return getType(poke); 
        }));
        let options = new Set();
        for(let option of selectTypeArray){
            options.add(<option value={option}>{option}</option>);
        }
        return (
            <>
            <p>Choose a Pokemon type to sort by</p>
            <select>
                {options}
            </select>
            </>
        )
    }
}
