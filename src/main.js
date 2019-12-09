document.getElementById("btn").addEventListener("click", () => {
     

    pag1.style.display = "none";
    root.style.display = "block";
    const text = document.getElementById("nom").value;
    const text1 =document.getElementById("nom1").value;
    console.log(text);
    

})
/**
 * import POKEMON from './data/pokemon/pokemon.js'
 * import LoL from './data/lol/lol.js'
 * import POTTER from './data/potter/potter.js'
 */

import { example } from './data.js';

console.log(example);

/*
 * console.log(POKEMON);
 * console.log(LoL);
 * console.log(POTTER)
*/
