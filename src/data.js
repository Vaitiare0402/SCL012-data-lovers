//import POTTER from    './data/potter/potter.js';

export const filtro = (POTTER) => {
   let selectionHouse = POTTER.filter(elemento => (elemento.house === "Gryffindor"));
     //console.log(selectionHouse);
     return selectionHouse;

}
export const filtroS = (POTTER) => {
let selectionSlytherin= POTTER.filter(elemento => (elemento.house === "Slytherin"));
//console.log(selectionSlytherin);
return selectionSlytherin;
}
export const filtroH = (POTTER) => {
let selectionHufflepuff= POTTER.filter(elemento => (elemento.house === "Hufflepuff"));
 //console.log(selectionHufflepuff);
 return selectionHufflepuff;
}
export const filtroR = (POTTER) => {
let selectionRavenclaw= POTTER.filter(elemento => (elemento.house === "Ravenclaw"));
//console.log(selectionRavenclaw);
return selectionRavenclaw;
}
