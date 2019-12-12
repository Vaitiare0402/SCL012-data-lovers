import POTTER from './data/potter/potter.js'
import{ filtro } from './data.js';
const dataFiltrado= filtro(POTTER)
    
import{ filtroS } from './data.js';
const dataFiltadoS= filtroS(POTTER)

import{ filtroH } from './data.js';
const dataFiltadoH=filtroH(POTTER)

import{ filtroR } from './data.js';
const dataFiltadoR=filtroR(POTTER)
    

    
    //btn de la pag principal//
     document.getElementById("btn").addEventListener("click", () => {
     
        pag1.style.display = "none";
        root.style.display = "block";
    })

    
    document.getElementById("btn2").addEventListener("click", () =>{
    
        //con el for recorre toda la data//
        let selectionHouse = dataFiltrado;
        for (let i=0; i < selectionHouse.length; i++){
            contaier.innerHTML += `<div class= "info">
            <img src=${selectionHouse[i].image} class="fotos"/>
            <li class="description">Name: ${selectionHouse[i].name}
            <li class="description">Species:${selectionHouse[i].species}
            <li class="description">Gender:${selectionHouse[i].gender}
            <li class="description">House:${selectionHouse[i].house}
            <li class="description">Date of birthday: ${selectionHouse[i].dateOfBirth}
            <li class="description">Year of birthday: ${selectionHouse[i].yearOfBirth}
            <li class="description">Ancestry:${selectionHouse[i].ancestry}
            <li class="description">Eye colour:${selectionHouse[i].eyeColour}
            <li class="description">Patronus:${selectionHouse[i].patronus}
            <li class="description">Actor:${selectionHouse[i].actor}
                                   
           </div>`

        }
    });
   
  //filtro por casa Slytherin
    document.getElementById("btn3").addEventListener("click", () =>{
        let selectionSlytherin = dataFiltadoS;
        for (let i=0; i < selectionSlytherin.length; i++){
            contaier.innerHTML += `<div class= "info">
            <img src=${selectionSlytherin[i].image} class="fotos"/>
            <li class="description">Name:${selectionSlytherin[i].name}
            <li class="description">Species:${selectionSlytherin[i].species}
            <li class="description">Gender:${selectionSlytherin[i].gender}
            <li class="description">House: ${selectionSlytherin[i].house}
            <li class="description">Date of birthday:${selectionSlytherin[i].dateOfBirth}
            <li class="description">Year of birthday:${selectionSlytherin[i].yearOfBirth}
            <li class="description">Ancestry:${selectionSlytherin[i].ancestry}
            <li class="description">Eye colour:${selectionSlytherin[i].eyeColour}
            <li class="description">Patronus:${selectionSlytherin[i].patronus}
            <li class="description">Actor:${selectionSlytherin[i].actor}

                        
            </div>`

        }

});
    //filtro por casa Hufflepuff
    document.getElementById("btn4").addEventListener("click", () =>{
        let selectionHufflepuff = dataFiltradoH;
        for (let i=0; i < selectionHufflepuff.length; i++){
            contaier.innerHTML += `<div class= "info">
            <img src=${selectionHufflepuff[i].image}class="fotos"/>
            <li class="description">Name:${selectionHufflepuff[i].name}
            <li class="description">Species:${selectionHufflepuff[i].species}
            <li class="description">Gender:${selectionHufflepuff[i].gender}
            <li class="description">House: ${selectionHufflepuff[i].house}
            <li class="description">Date of birthday:${selectionHufflepuff[i].dateOfBirth}
            <li class="description">Year of birthday:${selectionHufflepuff[i].yearOfBirth}
            <li class="description">Ancestry:${selectionHufflepuff[i].ancestry}
            <li class="description">Eye colour:${selectionHufflepuff[i].eyeColour}
            <li class="description">Patronus:${selectionHufflepuff[i].patronus}
            <li class="description">Actor:${selectionHufflepuff[i].actor}

                                   
           </div>`
        }
});

      //filtro por casa Ravenclaw
    document.getElementById("btn5").addEventListener("click", () =>{
        let selectionRavenclaw = dataFiltradoR;
        for (let i=0; i < selectionRavenclaw.length; i++){
            contaier.innerHTML += `<div class= "info">
            <img src=${selectionRavenclaw[i].image}class="fotos"/>
            <li class="description">Name:${selectionRavenclaw[i].name}
            <li class="description">Species:${selectionRavenclaw[i].species}
            <li class="description">Gender:${selectionRavenclaw[i].gender}
            <li class="description">House: ${selectionRavenclaw[i].house}
            <li class="description">Date of birthday:${selectionRavenclaw[i].dateOfBirth}
            <li class="description">Year of birthday:${selectionRavenclaw[i].yearOfBirth}
            <li class="description">Ancestry:${selectionRavenclaw[i].ancestry}
            <li class="description">Eye colour:${selectionRavenclaw[i].eyeColour}
            <li class="description">Patronus:${selectionRavenclaw[i].patronus}
            <li class="description">Actor:${selectionRavenclaw[i].actor}

                            
            
       </div>`
    }
});