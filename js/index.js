//   variant 1 (циклічна)

  let n = prompt("Enter a number Fib")

  function fib(n) {
   let a = 1,
       b = 1;
       
  for (let i = 3; i <= n; i++) {
  
   let c = a + b;
       a = b;
       b = c;
   }
   return b;
  }

  document.write(fib(n))
 



 // variant 2 (рекурсив)

//  let n = parseFloat(prompt('Enter a number Fib'));

//  function fibonacci (n) {
//      if (n<2) {
//          return n;
//       } 
//       else {
//          return (fibonacci(n-1) + fibonacci(n-2));
//       }
//   }
//   document.write(fibonacci(n-1) + fibonacci(n-2));



 //  variant 3 (масив)

//  let n = parseFloat(prompt('Enter a number Fib'));

//  function fibonacci(n) {
//      let array = [1, 1, 2];

//      for (let i = 3; i < n; i++) {
       
//          array[0] = array[1];
//          array[1] = array[2];
//          array[2] = array[0] + array[1];
        
//      }

//      return array[2];
//  }

//  document.write(fibonacci(n));