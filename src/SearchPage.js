import React, { Component } from 'react'

import Searcher from './components/BuildSearcher.js'
import TypeDropdown from './components/dropdown/BuildTypeDropdown.js'
import EggDropdown from './components/dropdown/BuildEggDropdown.js'
import AbilityDropdown from './components/dropdown/BuildAbilityDropdown.js'
import PokeList from './components/poke-items/PokeList.js'
import SortOrder from './components/dropdown/BuildSortOrderer.js'
import Buttons from './components/BuildButtons.js'
import request from 'superagent'
import Spinner from './components/Spinner.js'


export default class SearchPage extends Component {
    state = {
        pokemon: [],
        query: '',
        loading: false,
        filter: '',
        sortRev: 'asc',
        sortByOrder: '',
        dropDisplay: 'type_1'
    }

    componentDidMount = async () => {
        this.setState({loading: true});
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=id&direction=asc&perPage=166`);
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000);
        this.setState({pokemon: data.body.results});

    }

    handlePokemonApiQuery = async () => {
        this.setState({loading: true});
        
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=id&direction=${this.state.sortRev}&pokemon=${this.state.query}`);
        setTimeout(() => {
            this.setState({loading: false})
        }, 1200);
        console.log(data);
        this.setState({pokemon: data.body.results});
        
    }



    render() {

        const handleTypeButton = (e) => {
            this.setState({filter: 'all'});
            this.setState({dropDisplay: e.target.value});
        }

        const handleTypeSort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleEggSort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleAbilitySort = (e) => {
            this.setState({filter: e.target.value} )
        }
        const handleOrder = async (e) => {
            await this.setState({sortRev: e.target.value});
            await this.handlePokemonApiQuery();
        }
        const handleInputChange = async (e) => {
            await this.setState({query: e.target.value})

            await this.handlePokemonApiQuery();
        }
    
        
        const filterPokemonType = this.state.pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if(poke.type_1 === this.state.filter) {
                return true;
            }
            return false;
        })

        const filterPokemonEgg = this.state.pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (this.state.filter === poke.egg_group_1) {
                return true;
            }
            return false;
        })
        const filterPokemonAbility = this.state.pokemon.filter((poke)=>{
            if(!this.state.filter) return true;
            if(this.state.filter === 'all') return true;
            if (this.state.filter === poke.ability_1) {
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
        console.log(this.state.pokemon);
        console.log(this.state.sortRev);

        return (
            <div className='container'>
                
                <div className='aside'>
                    <Buttons handleButton={handleTypeButton} />
                    
                    {this.state.dropDisplay === 'ability_1' && 
                        <AbilityDropdown Pokemon={this.state.pokemon} value={this.state.filter}  onChange={handleAbilitySort}/>
                    }
                    {this.state.dropDisplay === 'egg_group_1' && 
                        <EggDropdown Pokemon={this.state.pokemon} value={this.state.filter}  onChange={handleEggSort}/>
                    }
                    {this.state.dropDisplay === 'type_1' && 
                        <TypeDropdown Pokemon={this.state.pokemon} value={this.state.filter}  onChange={handleTypeSort}/>
                    }
                    
                    <SortOrder onChange={handleOrder}/>
                    
                    <Searcher onChange={handleInputChange}/>
                    <button>Search</button>
                </div> 
                    
                {this.state.loading ? 
                <Spinner /> 
                : <div className="list-container">
                    {/* {this.state.dropDisplay === 'type_1' &&  */}
                        <PokeList Pokemon={this.state.pokemon} sortRev={this.state.sortRev}/>
                    {/* } */}
{/* 
                    {this.state.dropDisplay === 'egg_group_1' && 
                        <PokeList Pokemon={this.} sortRev={this.state.sortRev}/>
                    }
                    {this.state.dropDisplay === 'ability_1' && 
                        <PokeList Pokemon={displaySearchAbility} sortRev={this.state.sortRev}/>
                    } */}
                </div>
                }
            </div>
        )
    }
}
