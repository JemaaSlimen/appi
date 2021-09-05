 const api="https://www.breakingbadapi.com/api/characters";
 async function getData(){

try{
const response = await fetch (api)
const data = await response.json();
console.log(data)
printData(data)
}catch(e){
    console.log("Error:",e.message)
}


}


function printData(data){
const header = document.querySelector("#header")   
const content = document.querySelector("#content")

header.innerHTML += `
<select class="form-control" onchange="getCh(this.value)" > 
<option>choose</option>
${data.map(character => `<Option>${character.name}</Option>`)}
</select>
`
}

async function getCh(name){
if(name!="choose"){  
const response = await fetch(`${api}?name=${name}`)
const data = await response.json();
content.innerHTML=`
<h2>${data.name[0]} (>${data.nickname[0]}) </h2>
<h2>${data.portrayed[0]}</h2>
<img src="${data.portrayed[0]}" width="250" />
`
}
}
getData()



