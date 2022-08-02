export const viewTitle = ()=>{
 let container = document.querySelector(".container")
 let title = document.createElement("h1");
 title.classList.add("title")
 title.innerText = "ANIMALES"

 let containerTable = document.createElement("table");
 containerTable.classList.add("tabla") 
 containerTable.innerText="holaa"
 
 let bodyTable = document.createElement("tbody")
 let columTr = document.createElement("tr");
 let colum1 = document.createElement("td");
 let colum2 = document.createElement("td");
 let colum3 = document.createElement("td");

 columTr.append(colum1,colum2,colum3);
 bodyTable.append(columTr)
 containerTable.append(bodyTable)
 container.append(title,containerTable)
 
}