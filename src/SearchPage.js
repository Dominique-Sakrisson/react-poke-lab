import React, { Component } from 'react'
import Pokemon from './pokemon.js'
import Searcher from './Searcher.js'
import Sorter from './Sorter.js'

import {alphaSort, alphaSortReverse, typeSort,} from './MungeUtils.js'
import PokeList from './PokeList.js'


export default class SearchPage extends Component {
    state = {
        pokemon: '',
        sortByOrder: '',
        sortRev: false,
        filter: ''
    }


    handleTypeSort = (e) => {
        this.setState({filter: e.target.value} )
    }
    // <KeyBuilder  images={images} value={this.state.keyword} onChange={handleKeywordChange}/>

    render() {
        return (
            <div className='container'>
                <div className='aside'>
                    <Sorter Pokemon={Pokemon} onChange={this.handleTypeSort}/>
                    {/* {(Pokemon.id)} */}
                </div> 
                <div className="list-container">
                    <PokeList Pokemon={Pokemon}/>
                </div>
            </div>
        )
    }
}
