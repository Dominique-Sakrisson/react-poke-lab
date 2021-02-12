import React from 'react'

export default class PokeDetails extends React.Component {
    render() {
        const {
            Pokemon,
            classType
        } = this.props;
        return (
            <div className='details'>
                <p className={`name-label`}>{Pokemon.pokemon.toUpperCase()}</p>
                <p className={`type-label-${classType} type-label`}> Type: {classType}</p>
            </div>
        )
    }
}
