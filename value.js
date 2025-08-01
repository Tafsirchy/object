const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    propName: 'manager',
    salary: 25000,
    married: true,
    favPlaces: ['dhaka', 'chittagong', 'cox bazar'],
    'fav Places': ['dhaka', 'chittagong', 'cox bazar'],
};

person.salary = 30000;
person['age'] = 35;
person['fav Places'] = ['bandarbar', 'khagrachori', 'rangamati'];

// console.log(person);
// console.log(person['fav Places']);

const keyName = 'profession';
console.log(person[keyName]);

const jobName = 'propName';
person[jobName] = 'editor';
console.log(person);
