let myMap = new Map();
myMap.set('key1', 'value1' );
myMap.set('key2', 'value2' );
myMap.set('key3', 'value3' );

// myMap.forEach((value, key, map) => {
//   console.log('ключ-'+ ${key} + ', значение-'+ ${value}') 
// ;


// let myMap = new Map();
// myMap.set('key1', 'value1' );
// myMap.set('key2', 'value2' );
// myMap.set('key3', 'value3' );


// for (let name of myMap.keys()){
//   console.log('Ключ - ', name)
// };
// for (let val of myMap.values()){
//   console.log('Значение - ', val)
// }  
  

const cb = (value, key) => console.log(`Ключ -  ${key} , Значение - ${value}`);


myMap.forEach(cb)

