import React from 'react'

export default class PokeDetails extends React.Component {
    render() {
        const {
            Pokemon,
            classType
        } = this.props;
        
        return (
            <div className='details'>
                <div className='name-type'>
        
                    <p className={`name-label`}>{Pokemon.pokemon.toUpperCase()}</p>
                    
                    <p className={`type-label-${classType} type-label`}> Type: {classType}</p>
                    <p className={`egg-label`}> Egg: {Pokemon.egg_group_1}</p>
                    <p className={`ability-label`}>Ability: {Pokemon.ability_1}</p>
                </div>
                    <p>Stats</p>
                <div className='stats'>
                    <ul>
                        <li className='notName'>Max HP: {Pokemon.hp} </li>
                        <li className='notName'>Attack: {Pokemon.attack} </li>
                        <li className='notName'>Defense: {Pokemon.defense}</li>
                        <li className='notName'>Speed: {Pokemon.speed}</li>
                    </ul>
                </div>
            </div>
        )
    }
}
