let fructe=["mar", "banana","portocala","strugure"];
console.log("Lista de fructe:");

for(let f of fructe){
    console.log(f);
}

let lungimeFructe = fructe.map(f => f.length);
console.log("Lungime fructe", lungimeFructe);