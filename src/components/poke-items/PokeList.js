import React from 'react';
import PokeItem from './PokeItem.js'
import { getType} from '../../MungeUtils.js'

export default class ImageList extends React.Component {
    render() {   
        const {
            Pokemon,
            sortRev
        } = this.props;

        let sortedArray = Pokemon.slice();
        if (sortRev === 'true') {
             sortedArray.reverse();
         } else{
            sortedArray.sort();
         }
         
        return (
            <>
            {
                sortedArray.map((poke) => { 
                    let classType = getType(poke);
                    return <PokeItem key={poke._id} Pokemon={poke} classType={classType}/> 
                })
            }
            </>
        );
    }
}
