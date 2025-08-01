const mobile = {
    brand: 'apple',
    price: 80000,
    color: 'white',
    camera: '200 mp',
    isNew: true
}

for(const prop in mobile){
    // console.log(prop);
    console.log(mobile[prop]);
}

const keys = Object.keys(mobile);
console.log(keys);

for(const key of keys){
    // console.log(key);
    console.log(key, ':' ,mobile[key]);
}


// different object declaration 
const pen = {brand: 'econo', price: 10, color: 'black'};
const pencil = new Object()
console.log(pencil)

const rubber  = Object.create({})
console.log(rubber)

