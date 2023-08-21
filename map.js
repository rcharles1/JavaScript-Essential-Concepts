const cities = new Map ([
    ['Dar es Salaam', 'Tanzania'],
    ['Munich', 'Germany'],
    ['London', 'UK'],
    ['Cape Town', 'South Africa'],
]);

let map_size = cities.size;

console.log(cities);

console.log(cities.keys()); //returns keys

console.log(cities.values()); //returns values

console.log(cities.entries()); //returns both key & values

//iterating using forEach
cities.forEach((value, key) => {
    console.log(`${key} is a city in ${value}.`)
    
});

//iterating with for-in 
for (const [key,value] of cities) {
    console.log(`${key} is a city in ${value}.`)
}

const address = { 
	'Tapas': 'Bangalore', 
	'James': 'Huston', 
	'Selva': 'Srilanka'
}; 

const addressMap = Object.entries(address); //obj to map
console.log(addressMap);

const cityObj = Object.fromEntries(cities) //map to obj
console.log(cityObj); 

console.log(Array.from(cities)); //Map to array
console.log([...cities]);