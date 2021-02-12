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
//adds a classname of the pokemons type
export function matchType(poke){
    let classType= '';
    if (poke.type_1 === 'bug') {
        classType = poke.type_1;
    }
    if (poke.type_1 === 'fire') {
        classType = poke.type_1;
    }
    if (poke.type_1 === 'grass') {
        classType = poke.type_1;
    }
    if (poke.type_1 === 'flying') {
        classType = poke.type_1;
    }
    if (poke.type_1 === 'water') {
        classType = poke.type_1;
    };
    return classType;
}

export function getType(poke) {
    return poke.type_1;
 }