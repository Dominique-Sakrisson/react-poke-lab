import React, { Component } from 'react'
import request from 'superagent';
import Spinner from './components/Spinner.js'


export default class DetailPage extends Component {
    state = {
        pokeObject: {}
    }

    componentDidMount = async() => {
        this.setState({loading:true});

        const data = await request.get(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.props.match.params.pokeName}`)
        this.setState({
            loading:false, 
            pokeObject: data.body.results.find(item => item.pokemon === this.props.match.params.pokeName),
        })
    }
    render() {
        console.log(this.state.pokeObject);
        return (
            <div>
                {
                    this.state.loading ? <Spinner />
                    :
                    <div>
                        
                        <p>{this.state.pokeObject.pokemon}</p>
                        <p>Attack: {this.state.pokeObject.attack}</p>
                        <p>Defense: {this.state.pokeObject.defense}</p>
                        <p>Speed: {this.state.pokeObject.speed}</p>
                        <p>{this.state.pokeObject.height} feet tall</p>
                        <img src={this.state.pokeObject.url_image} alt={`the pokemon ${this.state.pokeObject.pokemon}`}/>

                    </div>
                }
            </div>
        )
    }
}
