console.log("start");

function test(x) {
  if (x === 1) {
    x = 0;
  }
  return x;
}

const a = test(1);
const b = test(2);
const c = test(3);

console.log("end", a, b, c);
console.log("premier commit", a);
console.log("premier commit", b);

console.log("dernier commit", a);
console.log("dernier commit", a);
console.log("dernier commit", a);
//console.log("dernier commit", a);
