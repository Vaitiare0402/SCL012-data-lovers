 
    import POTTER from './data/potter/potter.js'
    

    
    //btn de la pag principal//
     document.getElementById("btn").addEventListener("click", () => {
     
        pag1.style.display = "none";
        root.style.display = "block";
    })

    //btn filtrado//
    //let harryF = [];
    document.getElementById("btn2").addEventListener("click", () =>{
    
        //con el for recorre toda la data//
    
        for(let i = 0; i < POTTER.length; i++){
        //const btn = POTTER[i];
        console.log(POTTER[i]);
        contaier.innerHTML += `<div>
                                    <li> 
                                    ${POTTER[i].name}
                                    
                                     
                                    </li>
                                </div>`
        }
        
    });
    
    


    //filtro por casas//
    let selectionHouse = POTTER.filter(elemento => (elemento.house === "Gryffindor"));
    console.log(selectionHouse);
    
      

      

    
    
    

