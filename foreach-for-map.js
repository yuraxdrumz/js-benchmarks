let arr = [];
let arr2 = [];
for(let i =0;i<1e6;i++){
  arr.push(i)
}
console.time('foreach');
arr.forEach(item=>{
  arr2.push(item);
});
console.timeEnd('foreach');

console.time('map');
arr.map(item=>{
  arr2.push(item);
});
console.timeEnd('map');
console.time('for');
for(let i =0;i<arr.length;i++){
  arr2.push(i)
}
console.timeEnd('for');

// foreach: 26.449ms
// map: 88.639ms
// for: 19.908ms
