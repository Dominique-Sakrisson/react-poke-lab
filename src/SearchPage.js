import React, { Component } from 'react'
import Pokemon from './pokemon.js'
import Searcher from './Searcher.js'
import TypeDropdown from './BuildTypeDropdown.js'
import PokeList from './PokeList.js'
import InputSearch from './PokeInput.js'
import SortOrder from './SortOrderer.js'



export default class SearchPage extends Component {
    state = {
        pokemon: '',
        sortByOrder: '',
        sortRev: '',
        filter: '',
        query: ''
    }
    render() {
        const handleTypeSort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleOrder = (e) => {
            this.setState({sortRev: e.target.value});
        }
        const handleInputChange = (e) => {
            this.setState({query: e.target.value})
        }

        const filterPokemonType = Pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (poke.type_1 === this.state.filter) {
                return true;
            }
            return false;
        })

        const displaySearch = filterPokemonType.filter((poke) => {
            if (!this.state.query) return true;
            console.log(this.state.query.length);
            if (poke.pokemon.substring(0,this.state.query.length) === this.state.query) return true;
            return false;
        })
         
        return (
            <div className='container'>
                <div className='aside'>
                    <SortOrder onChange={handleOrder}/>
                    <TypeDropdown Pokemon={Pokemon} value={this.state.filter} sortRev={this.state.sortRev} onChange={handleTypeSort}/>
                    <InputSearch onChange={handleInputChange}/>
                    <Searcher onChange={handleInputChange}/>
                </div> 

                <div className="list-container">
                    {/* <PokeList Pokemon={filterPokemonType} sortRev={this.state.sortRev}/> */}
                    <PokeList Pokemon={displaySearch} sortRev={this.state.sortRev}/>
                </div>

            </div>
        )
    }
}
