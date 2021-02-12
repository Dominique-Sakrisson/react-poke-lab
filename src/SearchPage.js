import React, { Component } from 'react'
import Pokemon from './pokemon.js'
import Searcher from './Searcher.js'
import Sorter from './Sorter.js'

export default class SearchPage extends Component {
    state = {
        pokemon: '',
        sortByOrder: '',
        sortRev: false,
        filter: ''
    }


    // <KeyBuilder  images={images} value={this.state.keyword} onChange={handleKeywordChange}/>

    render() {
        return (
            <div className='aside'>
                <Sorter Pokemon={Pokemon} />
               {/* {(Pokemon.id)} */}
            </div>
        )
    }
}
