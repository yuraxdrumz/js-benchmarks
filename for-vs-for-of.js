let arr = [];
let arr2 = [];
// for loop
for(let i =0;i<1e6;i++){
  arr.push(i)
}
console.time('for loop');

for(let i=0;i<arr.length;i++){
  arr2.push(i);
}
console.timeEnd('for loop');

// for of
console.time('for of loop');
for(let i of arr){
  arr2.push(i);
}
console.timeEnd('for of loop');

// checking length: 0.081ms length calculated once
// checking length: 0.083ms length calculated every time

// for loop: 14.462ms
// for of loop: 29.860ms
