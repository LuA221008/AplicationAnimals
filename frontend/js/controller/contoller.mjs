
export const getAnimal = async(url)=>{
    return fetch(url).then((respuesta)=> respuesta.json())   
    
}

export const getAnimalById = async(url, id)=>{
    return fetch(`${url}/${id}`).then((respuesta)=> respuesta.json())   
    
}

export const animalPost= async(url, nombre, especie)=>{
    let cuerpoObjeto = {

        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Nombre: nombre || '',
            especie: especie || ''
        })

    }
   
    return fetch(`${url}`,cuerpoObjeto); 
    
}
export const animalPut= async(url,id, nombre, especie)=>{
    let cuerpoObjeto = {

        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            Nombre: nombre || '',
            especie: especie || ''
        })

    }
   
    return fetch(`${url}/${id}`,cuerpoObjeto); 
    
}

export const animalDelete= async(url,id)=>{
    let cuerpoObjeto = {

        method: "DELETE",
        headers: {
            'Content-Type': 'application/json'
        }
       
    }
   
    return fetch(`${url}/${id}`,cuerpoObjeto); 
    
}

