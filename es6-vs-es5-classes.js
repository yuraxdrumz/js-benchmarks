//es5 syntax
function Points(x0,y0,x1,y1){
  this.points = {
    x0:x0,
    x1:x1,
    y0:y0,
    y1:y1
  }
}
Points.prototype.distance = function () {
  var p = this.points;
  var x = p.x1 - p.x0;
  var y = p.y1 - p.y0;
  return Math.sqrt(x*x + y*y);
}
var iter = 1e6;
var rand = Math.random;
console.time(`time for ${iter} objects and method`);
for(var i =0;i<iter;i++){
  var p = new Points(rand(),rand(),rand(),rand());
  for(var j=0;j< 1e4 ;j++){
    p.distance();
  }
}
console.timeEnd(`time for ${iter} objects and method`);

// es6 syntax
class Points2{
  constructor(x0,x1,y0,y1){
    this.x0 = x0;
    this.x1 = x1;
    this.y0 = y0;
    this.y1 = y1;
  }
  distance(){
    let x = this.x1 - this.x0;
    let y = this.y1 - this.y0;
    return Math.sqrt(x*x + y*y);
  }
}
var iter = 1e6;
var rand = Math.random;
console.time(`time for ${iter} objects and method`);
for(let i =0;i<iter;i++){
  let p = new Points2(rand(),rand(),rand(),rand());
  for(let j=0;j< 1e4 ;j++){
    p.distance();
  }
}
console.timeEnd(`time for ${iter} objects and method`);

// time for 1000000 objects and method: 76.655ms 1e2 es5
// time for 1000000 objects and method: 213.873ms 1e2 es6
// time for 1000000 objects and method: 3757.105ms 1e4 es5
// time for 1000000 objects and method: 19510.435ms 1e4 es6




