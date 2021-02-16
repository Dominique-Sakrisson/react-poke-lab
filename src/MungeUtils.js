//sorts the Raw data alphabetically by the Pokemon's name
export function alphaSort(a,b) {
    let idA = a.pokemon.toUpperCase();
    let idB = b.pokemon.toUpperCase();
    if(idA < idB){
        return -1
    }
    if(idA > idB){
        return 1;
    }
    return 0; 
}
//sorts the Raw data  REVERSE alphabetically by the Pokemon's name
export function alphaSortReverse(a,b){
    let idA = a.pokemon.toUpperCase();
    let idB = b.pokemon.toUpperCase();
    if(idA < idB){
        return 1
    }
    if(idA > idB){
        return -1;
    }
    return 0;
}
//sorts the Raw data alphabetically by the Pokemon's type
export function typeSort(a,b) {
    let idA = a.type_1.toUpperCase();
    let idB = b.type_1.toUpperCase();
    if(idA < idB){
        return -1
    }
    if(idA > idB){
        return 1;
    }
    return 0; 
}

//sorts the Raw data REVERSE alphabetically by the Pokemon's name
export function typeSortReverse(a,b) {
    let idA = a.type_1.toUpperCase();
    let idB = b.type_1.toUpperCase();
    if(idA < idB){
        return 1
    }
    if(idA > idB){
        return -1;
    }
    return 0; 
}

export function getType(poke) {
    return poke.type_1;
}
export function getEgg(poke){
    return poke.egg_group_1;
}
export function getAbility(poke){
    return poke.ability_1;
}
