 
    import POTTER from './data/potter/potter.js'
    

    
    //btn de la pag principal//
     document.getElementById("btn").addEventListener("click", () => {
     
        pag1.style.display = "none";
        root.style.display = "block";
    })

    
    document.getElementById("btn2").addEventListener("click", () =>{
    
        //con el for recorre toda la data//
    
        let selectionHouse = POTTER.filter(elemento => (elemento.house === "Gryffindor"));
        console.log(selectionHouse);
        //console.log(POTTER[i]);
        contaier.innerHTML += `<div class="container">
                            
                                   
        
        
                                </div>`

    });
   
  //filtro por casa Slytherin
    document.getElementById("btn3").addEventListener("click", () =>{
     
        let selectionSlytherin= POTTER.filter(elemento => (elemento.house === "Slytherin"));
        console.log(selectionSlytherin);
        contaier.innerHTML += `<div>
                                   
        </div>`

});
    //filtro por casa Hufflepuff
    document.getElementById("btn4").addEventListener("click", () =>{
        
          let selectionHufflepuff= POTTER.filter(elemento => (elemento.house === "Hufflepuff"));
          console.log(selectionHufflepuff);
          contaier.innerHTML += `<div>
                                     
                                  </div>`
          
      });
      //filtro por casa Ravenclaw
    document.getElementById("btn5").addEventListener("click", () =>{
        
          let selectionRavenclaw= POTTER.filter(elemento => (elemento.house === "Ravenclaw"));
          console.log(selectionRavenclaw);
          contaier.innerHTML += `<div>
                                     
                                  </div>`
          
      });
