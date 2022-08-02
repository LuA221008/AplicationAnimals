import { getAnimal} from "../controller/contoller.mjs";
import{animalPost} from"../controller/contoller.mjs"

let data= await getAnimal("http://localhost:3000/Amimales");
let title = document.createElement("h1");
title.classList.add("title")
title.innerText = "ANIMALES"

let label = document.createElement("label");
label.innerText = "Nombre del animal: ";

let imput = document.createElement("input");
label.append(imput)


let labelEspecie = document.createElement("label");
labelEspecie.innerText="Especie del animal:"

let imputEspecie = document.createElement("input");
labelEspecie.append(imputEspecie)



let lista = document.createElement("ol");
lista.classList.add("lista");

let listaEspecie = document.createElement("ol");
listaEspecie.classList.add("lista1");

let container = document.querySelector(".container")

let buttonAgregar = document.createElement("button");
buttonAgregar.classList.add("agregar");
buttonAgregar.innerHTML="Agregar"






export const viewTitle = ()=>{

    

    buttonAgregar.addEventListener("click", ()=>{
        let nombre = imput.value;    
        let especie= imputEspecie.value;
        agergarAnimal(nombre,especie);
        console.log(nombre);
    })

   


    crearListaEspecieAnimales(data);
    crearListaNombresAnimales(data);
    
    container.append(title,label,labelEspecie,lista,listaEspecie,buttonAgregar) 
 
}





function crearListaNombresAnimales(dataUser) {    
    dataUser.forEach((element) => {    
       
        let crearB = document.createElement("li");
        crearB.textContent = (element.Nombre);
        crearB.classList.add("newAnimlas");
        lista.append(crearB);
      
    });
  }
  
  function crearListaEspecieAnimales(dataUser) {    
    dataUser.forEach((element) => {    
       
        let crearB = document.createElement("li");
        crearB.textContent = (element.Especie);
        crearB.classList.add("newAnimlas");
        listaEspecie.append(crearB);
      
    });
  }

  function agergarAnimal(nombre,especie){
        animalPost("http://localhost:3000/Amimales",nombre,especie)
    
  }

  


 

