 
    import POTTER from './data/potter/potter.js'
    
    //btn de la pag principal//
     document.getElementById("btn").addEventListener("click", () => {
     
        pag1.style.display = "none";
        root.style.display = "block";
        const text = document.getElementById("nom").value;
        const text1 =document.getElementById("nom1");
        console.log(text);
        text1.innerHTML = text.value;
    })
    //btn filtrado//
    let harryF = [];
    const data = document.getElementById("btn2").addEventListener("click", () =>{
    //con el for recorre toda la data//
    for(let i = 0; i < POTTER.length; i++){
        const btn = POTTER[i];
        console.log(POTTER[i]);
        }
        
    })
//hacer console.log con todas las caracteristicas//

 //console.log(POTTER)
 //console.log(POTTER[0].name);
 //console.log(POTTER[1].species);
 //console.log(POTTER[2].gender);
 //console.log(POTTER[3].house);
 //console.log(POTTER[4].dateOfBirth);
 //console.log(POTTER[5].yearOfBirth);
 //console.log(POTTER[6].ancestry);
 //console.log(POTTER[7].eyeColour);
 //console.log(POTTER[8].hairColour);

    
    
    

