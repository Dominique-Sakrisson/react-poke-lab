import React from 'react'
import Details from './PokeDetails.js'

export default class PokeItem extends React.Component {
    render() {
        const {
            Pokemon,
            classType,
            
        } = this.props;
        return (
            <div className="poke-image-div">
                <p className={`${classType} poke-back`}></p>
                <img src={Pokemon.url_image} alt={Pokemon.pokedex} />
                {/* <p>{Pokemon.pokemon}</p> */}
                {/* <p className={`type-label`}> Type: {classType}</p> */}
                 
                <Details Pokemon={Pokemon} classType={classType}/>
            </div>
        );
    }
}
