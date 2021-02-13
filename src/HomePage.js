import React, { Component } from 'react'
import Pokemon from './pokemon.js'

export default class HomePage extends Component {
    render() {
        const pokeImgList = Pokemon.map( (poke) => {
           return <img className={`poke-image poke-image-${poke.id}`} src={poke.url_image} alt={`the pokemon ${poke.pokemon}`}/>
           
        });
        console.log(pokeImgList);
        return (
            <div>

                <div className='poke-images'>
                    {pokeImgList}
                </div>
              <img  className='col-right' src='https://icon-library.com/images/pokemon-ball-icon/pokemon-ball-icon-22.jpg' alt='master-ball'/>

            </div>
        )
    }
}
