 
    import POTTER from './data/potter/potter.js'
    
    import{ filtro } from './data.js';
filtro(POTTER)
    
import{ filtroS } from './data.js';
filtroS(POTTER)

import{ filtroH } from './data.js';
filtroH(POTTER)

import{ filtroR } from './data.js';
filtroR(POTTER)
    

    
    //btn de la pag principal//
     document.getElementById("btn").addEventListener("click", () => {
     
        pag1.style.display = "none";
        root.style.display = "block";
    })

    
    document.getElementById("btn2").addEventListener("click", () =>{
    
        //con el for recorre toda la data//
        let selectionHouse = "";
        for (let i=0; i < selectionHouse.length; i++){
            contaier.innerHTML += `<div class= "info">
                                   ${selectionHouse[i].name}
                                   ${selectionHouse[i].species}
                                   ${selectionHouse[i].gender}
                                   ${selectionHouse[i].house}
                                   ${selectionHouse[i].dateOfBirth}
                                   ${selectionHouse[i].yearOfBirth}
                                   ${selectionHouse[i].ancestry}
                                   ${selectionHouse[i].eyeColour}
                                   ${selectionHouse[i].wood}
                                   ${selectionHouse[i].core}
                                   ${selectionHouse[i].length}
                                   ${selectionHouse[i].patronus}
                                   ${selectionHouse[i].actor}
                
           </div>`

        }
    });
   
  //filtro por casa Slytherin
    document.getElementById("btn3").addEventListener("click", () =>{
        let selectionSlytherin = "";
        for (let i=0; i < selectionSlytherin.length; i++){
            contaier.innerHTML += `<div class= "info">
                                   ${selectionSlytherin[i].name}
                                   ${selectionSlytherin[i].species}
                                   ${selectionSlytherin[i].gender}
                                   ${selectionSlytherin[i].house}
                                   ${selectionSlytherin[i].dateOfBirth}
                                   ${selectionSlytherin[i].yearOfBirth}
                                   ${selectionSlytherin[i].ancestry}
                                   ${selectionSlytherin[i].eyeColour}
                                   ${selectionSlytherin[i].wood}
                                   ${selectionSlytherin[i].core}
                                   ${selectionSlytherin[i].length}
                                   ${selectionSlytherin[i].patronus}
                                   ${selectionSlytherin[i].actor}
                
           </div>`

        }

});
    //filtro por casa Hufflepuff
    document.getElementById("btn4").addEventListener("click", () =>{
        let selectionHufflepuff = "";
        for (let i=0; i < selectionHufflepuff.length; i++){
            contaier.innerHTML += `<div class= "info">
                                   ${selectionHufflepuff[i].name}
                                   ${selectionHufflepuff[i].species}
                                   ${selectionHufflepuff[i].gender}
                                   ${selectionHufflepuff[i].house}
                                   ${selectionHufflepuff[i].dateOfBirth}
                                   ${selectionHufflepuff[i].yearOfBirth}
                                   ${selectionHufflepuff[i].ancestry}
                                   ${selectionHufflepuff[i].eyeColour}
                                   ${selectionHufflepuff[i].wood}
                                   ${selectionHufflepuff[i].core}
                                   ${selectionHufflepuff[i].length}
                                   ${selectionHufflepuff[i].patronus}
                                   ${selectionHufflepuff[i].actor}
                
           </div>`
        }
});

      //filtro por casa Ravenclaw
document.getElementById("btn5").addEventListener("click", () =>{
    let selectionRavenclaw = "";
    for (let i=0; i < selectionRavenclaw.length; i++){
        contaier.innerHTML += `<div class= "info">
                               ${selectionRavenclaw[i].name}
                               ${selectionRavenclaw[i].species}
                               ${selectionRavenclaw[i].gender}
                               ${selectionRavenclaw[i].house}
                               ${selectionRavenclaw[i].dateOfBirth}
                               ${selectionRavenclaw[i].yearOfBirth}
                               ${selectionRavenclaw[i].ancestry}
                               ${selectionRavenclaw[i].eyeColour}
                               ${selectionRavenclaw[i].wood}
                               ${selectionRavenclaw[i].core}
                               ${selectionRavenclaw[i].length}
                               ${selectionRavenclaw[i].patronus}
                               ${selectionRavenclaw[i].actor}
            
       </div>`
    }
});