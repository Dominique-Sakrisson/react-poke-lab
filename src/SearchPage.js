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
        defaultList: [],
        pokemon: [],
        query: '',
        loading: false,
        filter: '',
        ability: '',
        egg: '',
        type: '',
        sortRev: false,
        sortByOrder: '',
        dropDisplay: 'type_1',
        currentPage: 1,
        perPage: 20,
    }

    componentDidMount = async () => {
        this.setState({loading: true});

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/?perPage=801`);
        setTimeout(() => {
            this.setState({loading: false})
        }, 2000);
        this.setState({defaultList:data.body.results});
        //we know this is getting the full list
        
        const initData = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex/?page=${this.state.currentPage}&perPage=${this.state.perPage}`);
        this.setState({pokemon: initData.body.results});
        //we know this is getting the paged list
    }

    handlePokemonApiQuery = async () => {
        this.setState({loading: true});
        console.log(`current page: ${this.state.currentPage} pokemon list: ${this.state.pokemon} state type: ${this.state.type} egg group: ${this.state.egg} ability: ${this.state.ability}`);
        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?page=${this.state.currentPage}&ability_1=${this.state.ability}&egg_group_1=${this.state.egg}&type_1=${this.state.type}&pokemon=${this.state.query}`);

          console.log(this.state.pokemon);
        setTimeout(() => {
            this.setState({loading: false})
        }, 1200);
        this.setState({pokemon: data.body.results});
        
    }

    handlePrevPage = async() =>{
        await this.setState({currentPage: this.state.currentPage - 1});
        await this.handlePokemonApiQuery();
    }

    handleNextPage = async() =>{
        await this.setState({currentPage: this.state.currentPage + 1});
        await this.handlePokemonApiQuery();
    }



    render() {
        //i know this is not changing the poke list in state
        const handleTypeButton = async (e) => {
            //toggle button is clicked, reset all filter variables
            await this.setState({ability: '', egg: '', type: '', sortRev: false})
            await this.setState({filter: 'all'});
            await this.setState({dropDisplay: e.target.value});
            await this.handlePokemonApiQuery();
            console.log(this.state.pokemon);
        }

        const handleSort = async (e) => {
            await this.setState({filter: e.target.value} );
            await this.handlePokemonApiQuery();
        }
        
        const handleAbility = async(e) => {
            await this.setState({ability: e.target.value})
            await this.handlePokemonApiQuery();
        }
        const handleEgg = async(e) => {
            await this.setState({egg: e.target.value});
            await this.handlePokemonApiQuery();
        }
        const handleType = async(e) => {
            await this.setState({type: e.target.value});
            await this.handlePokemonApiQuery();
        }
        const handleId = async (e)=> {
            await this.setState({ability: '', egg: '', type: ''})
            await this.handlePokemonApiQuery();
        }
        const handleOrder = async (e) => {
            console.log(e.target.value);
            await this.setState({sortRev: e.target.value});
            await this.handlePokemonApiQuery();
        }
        const handleInputChange = async (e) => {
            await this.setState({query: e.target.value})
            await this.handlePokemonApiQuery();
        }
    
        return (
            <div className='container'>
                
                <div className='aside'>
                    <Buttons handleButton={handleTypeButton} />
                    
                    {this.state.dropDisplay === 'ability_1' && 
                        <AbilityDropdown Pokemon={this.state.defaultList} value={this.state.ability}  onChange={handleAbility}/>
                    }
                    {this.state.dropDisplay === 'egg_group_1' && 
                        <EggDropdown Pokemon={this.state.defaultList} value={this.state.egg}  onChange={handleEgg}/>
                    }
                    {this.state.dropDisplay === 'type_1' && 
                        <TypeDropdown Pokemon={this.state.defaultList} value={this.state.type}  onChange={handleType}/>
                    }
                    
                    <SortOrder onChange={handleOrder}/>
                    
                    <Searcher onChange={handleInputChange}/>
                    <button>Submit Search</button>

                    <button onClick={this.handlePrevPage}>Prev</button>
                    <span>Page {this.state.currentPage}</span>
                    <button onClick={this.handleNextPage}>Next</button>
                </div> 
                    
                {this.state.loading ? 
                <Spinner /> 
                : 
                <div className="list-container">
                    <PokeList Pokemon={this.state.pokemon} sortRev={this.state.sortRev} />
                </div>
                }
            </div>
        )
    }
}
