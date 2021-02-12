import React, { Component } from 'react'
import Pokemon from './pokemon.js'
import Searcher from './Searcher.js'
import Sorter from './Sorter.js'

import {alphaSort, alphaSortReverse, typeSort,} from './MungeUtils.js'
import PokeList from './PokeList.js'
import pokemon from './pokemon.js'


export default class SearchPage extends Component {
    state = {
        pokemon: '',
        sortByOrder: '',
        sortRev: false,
        filter: ''
    }
    render() {
        const handleTypeSort = (e) => {
            console.log(e.target.value);
            this.setState({filter: e.target.value} )
        }
    
    
        // <KeyBuilder  images={images} value={this.state.keyword} onChange={handleKeywordChange}/>
        const filterPokemon = Pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (poke.type_1 === this.state.filter) {
                return true;
            }
            return false;
        })
        return (
            <div className='container'>
                <div className='aside'>
                    <Sorter Pokemon={Pokemon} value={this.state.filter} onChange={handleTypeSort}/>
                    {/* {(Pokemon.id)} */}
                </div> 
                <div className="list-container">
                    <PokeList Pokemon={filterPokemon}/>
                </div>
            </div>
        )
    }
}
