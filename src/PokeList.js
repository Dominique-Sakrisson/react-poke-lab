import React from 'react';
import PokeItem from './PokeItem.js'
import { matchType} from './MungeUtils.js'

export default class ImageList extends React.Component {
    render() {   
        const {
            Pokemon,
            sortRev
        } = this.props;
        console.log(Pokemon);

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
                    let classType = matchType(poke);
                    return <PokeItem key={poke._id} Pokemon={poke} classType={classType}/> 
                })
            }
            </>
        );
    }
}
