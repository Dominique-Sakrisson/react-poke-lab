import React from 'react'
import Details from './PokeDetails.js'
import{ Link } from 'react-router-dom'

export default class PokeItem extends React.Component {
    render() {
        const {
            Pokemon,
            classType,
            
        } = this.props;
        return (
            <div className={`poke-image-div`}>
                <Link to={`pokemon/${Pokemon.pokemon}`}>
                    <div className={`${classType} poke-back`}>
                        <img src={Pokemon.url_image} alt={Pokemon.pokedex} />
                    </div>
                </Link>
                    <Details Pokemon={Pokemon} classType={classType}/>
            </div>
        );
    }
}
