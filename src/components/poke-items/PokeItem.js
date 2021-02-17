import React from 'react'
import Details from './PokeDetails.js'

export default class PokeItem extends React.Component {
    render() {
        const {
            Pokemon,
            classType,
            
        } = this.props;
        return (
            <div className={`poke-image-div`}>
            
                <div className={`${classType} poke-back`}>
                    <img src={Pokemon.url_image} alt={Pokemon.pokedex} />
                </div>
                <Details Pokemon={Pokemon} classType={classType}/>
            </div>
        );
    }
}
