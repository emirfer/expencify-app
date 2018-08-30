// const person = {
//     name: 'Emir',
//     age: 26,
//     location: {
//         city: 'London',
//         temp: 33
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;

// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(temperature && city) {
//     console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//     name: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         //name: 'Penguin'
//     }
// };

// const { name: publisherName = 'selfpublished'} = book.publisher;

// console.log(`${publisherName}`);

const address= ['1299 S. Juniper St.', 'Philadelphia', 'Pennsylvania','19147'];

const [, city, state] = address;

console.log(`You are in ${city} in ${state}`);
