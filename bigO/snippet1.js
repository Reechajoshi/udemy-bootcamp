// function addUpto(n: number) {
//   let accumSum = 0;
  
//   for(let i = 0; i <= n; i++) {
//     accumSum += i;
//   }
  
//   return accumSum;
// }

// let t1 = performance.now()
// addUpto(1000000000);
// let t2 = performance.now()

// console.log((t2-t1) /1000)  

// algebraic notation
function algebraic(n: number) {
  return (n*(n+1) /2)
}

let t3 = performance.now()
algebraic(10000000) 
let t4 = performance.now()

console.log(t4-t3)