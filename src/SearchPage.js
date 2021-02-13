import React, { Component } from 'react'
import Pokemon from './pokemon.js'
import Searcher from './Searcher.js'
import TypeDropdown from './BuildTypeDropdown.js'
import EggDropdown from './BuildEggDropdown.js'
import AbilityDropdown from './BuildAbilityDropdown.js'
import PokeList from './PokeList.js'
import SortOrder from './SortOrderer.js'
import {getEgg} from './MungeUtils.js'
import Buttons from './BuildButtons.js'

export default class SearchPage extends Component {
    state = {
        pokemon: '',
        sortByOrder: '',
        sortRev: '',
        filter: '',
        query: '',
        dropDisplay: 'type_1'
    }
    render() {
        const handleTypeSort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleEggSort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleAbilitySort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleOrder = (e) => {
            this.setState({sortRev: e.target.value});
        }
        const handleInputChange = (e) => {
            this.setState({query: e.target.value})
        }

        const handleTypeButton = (e) => {
            this.setState({filter: 'all'});
            this.setState({dropDisplay: e.target.value});
        }
        const handleEggButton = (e) => {
            this.setState({filter: 'all'});
            this.setState({dropDisplay: e.target.value});
        }
        const handleAbilityButton = (e) => {
            this.setState({filter: 'all'});
            this.setState({dropDisplay: e.target.value});
        }
        let handleButtons = [handleTypeButton, handleEggButton, handleAbilityButton];
        
        const filterPokemonType = Pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (poke.type_1 === this.state.filter) {
                return true;
            }
            return false;
        })
        
        const filterPokemonEgg = Pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (poke.type_1 === this.state.filter) {
                return true;
            }
            return false;
        })
        const filterPokemonAbility = Pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (poke.type_1 === this.state.filter) {
                return true;
            }
            return false;
        })




        const displaySearchType = filterPokemonType.filter((poke) => {
            if (!this.state.query) return true;
            if (poke.pokemon.substring(0,this.state.query.length) === this.state.query) return true;
            return false;
        })
        const displaySearchEgg = filterPokemonEgg.filter((poke) => {
            if (!this.state.query) return true;
            if (poke.pokemon.substring(0,this.state.query.length) === this.state.query) return true;
            return false;
        })
        const displaySearchAbility = filterPokemonAbility.filter((poke) => {
            if (!this.state.query) return true;
            if (poke.pokemon.substring(0,this.state.query.length) === this.state.query) return true;
            return false;
        })

        const eggs = new Set(Pokemon.map((poke) => {
            return getEgg(poke);
        }))
        console.log(this.state.dropDisplay);
        console.log(this.state.filter);
        return (
            <div className='container'>
                <div className='aside'>
                    <Buttons handlers={handleButtons}/>
                    
                    {this.state.dropDisplay === 'type_1' && 
                        <TypeDropdown Pokemon={Pokemon} value={this.state.filter} sortRev={this.state.sortRev} onChange={handleTypeSort}/>
                    }
                    {this.state.dropDisplay === 'egg_group_1' && 
                        <EggDropdown Pokemon={Pokemon} value={this.state.filter} sortRev={this.state.sortRev} onChange={handleEggSort}/>
                    }
                    {this.state.dropDisplay === 'ability_1' && 
                        <AbilityDropdown Pokemon={Pokemon} value={this.state.filter} sortRev={this.state.sortRev} onChange={handleAbilitySort}/>
                    }
                    
                    <SortOrder onChange={handleOrder}/>
                    <Searcher onChange={handleInputChange}/>
                </div> 

                <div className="list-container">
                    
                {this.state.dropDisplay === 'type_1' && 
                    <PokeList Pokemon={displaySearchType} sortRev={this.state.sortRev}/>
                }
                {this.state.dropDisplay === 'egg_group_1' && 
                    <PokeList Pokemon={displaySearchEgg} sortRev={this.state.sortRev}/>
                }
                {this.state.dropDisplay === 'ability_1' && 
                    <PokeList Pokemon={displaySearchAbility} sortRev={this.state.sortRev}/>
                }

                </div>
            </div>
        )
    }
}
