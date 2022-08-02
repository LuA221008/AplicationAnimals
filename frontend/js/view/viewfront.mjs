import { animalDelete, getAnimal,animalPost, animalPut} from "../controller/contoller.mjs";


let data= await getAnimal("http://localhost:3000/Amimales");
let title = document.createElement("h1");
title.classList.add("title")
title.innerText = "ANIMALES"


let containerList = document.createElement("div");
containerList.classList.add("containerLista")

let label = document.createElement("label");
label.innerText = "Nombre del animal: ";

let imput = document.createElement("input");
imput.classList.add("nombre")
label.append(imput)


let labelEspecie = document.createElement("label");
labelEspecie.innerText="Especie del animal:"

let imputEspecie = document.createElement("input");
labelEspecie.classList.add("especie")
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
    

    containerList.append(lista,listaEspecie)    
    container.append(title,label,labelEspecie,containerList,buttonAgregar) 
 
}






  
  function crearListaEspecieAnimales(dataUser) {    
    dataUser.forEach((element) => {    
        let buttonEleminar = document.createElement("button");
        buttonEleminar.classList.add("elimina");
        buttonEleminar.innerHTML="Eliminar" 


        let buttonActualizar = document.createElement("button");
        buttonActualizar.classList.add("actualizar");
        buttonActualizar.innerHTML="actualizar"

        let crearId = document.createElement("div")
        let id=crearId.textContent=(element.id)
        
        

        let crearA = document.createElement("div");
        crearA.textContent = (element.Nombre);

        let crearB = document.createElement("div");
        crearB.textContent = (element.especie); 
        
        crearId.append(crearA,crearB,buttonEleminar,buttonActualizar)       
        
        
        
        buttonEleminar.addEventListener("click",()=>{
            eliminarAnimal(id);
        })

        buttonActualizar.addEventListener("click",()=>{
            let nombre = imput.value;    
            let especie= imputEspecie.value;            
            actualizarAnimal(id,nombre,especie)
        })
        listaEspecie.append(crearId);
      
    });
  }

  function agergarAnimal(nombre,especie){
        animalPost("http://localhost:3000/Amimales",nombre,especie)
    
  }

  function eliminarAnimal(id){
    animalDelete("http://localhost:3000/Amimales",id)
  }

  function actualizarAnimal(id,nombre,especie){
    animalPut("http://localhost:3000/Amimales",id,nombre,especie)

  }

  


 

