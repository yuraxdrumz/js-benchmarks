let obj = {};

for(let i=0;i<1e6;i++){
  obj[i] = 'cool';
}

console.time('for in');
for(let item in obj){
}
console.timeEnd('for in');

console.time('object keys');
let keys = Object.keys(obj);
console.timeEnd('object keys');
// for in: 73.395ms
// object keys: 63.340ms

