import { animalPost, getAnimal, getAnimalById } from "./controller/contoller.mjs";
import { viewTitle } from "./view/viewfront.mjs";



const animal=async()=>{

   let data= await getAnimal("http://localhost:3000/Amimales");
   let dataById = await getAnimalById("http://localhost:3000/Amimales",1)
   //await animalPost("http://localhost:3000/Amimales","pez","pescado")
   console.log(data)
}
//animal();

viewTitle();

