import React from 'react';
import PokeItem from './PokeItem.js'
import { matchType } from './MungeUtils.js'

export default class ImageList extends React.Component {
    render() {   
        const {
            Pokemon,
        } = this.props;
        return (
            <>
            {
                Pokemon.map((poke) => {
                    let classType = matchType(poke);
                    return <PokeItem key={poke._id} Pokemon={poke} classType={classType}/> 
                })
            }
            </>
        );
    }
}
