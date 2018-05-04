//     variant 1 (циклічна)

   let n = prompt("Enter a number Fib")

   function fib(n) {
   let a = 1,
       b = 1,
       c;
   for (let i = 3; i <= n; i++) {
  
   let c = a + b;
       a = b;
       b = c;
   }
   return b;
   }
   document.write(fib(n))
 



 // variant 2 (рекурсив)

//   let n = parseFloat(prompt('Enter a number Fib'));

//   function fibonacci (n) {
//       if (n<2) {
//           return n;
//       } 
//       else {
//           return (fibonacci(n-1) + fibonacci(n-2));
//       }
//   }
//   document.write(fibonacci(n-1) + fibonacci(n-2));



//   variant 3 (масив)

//   let n = parseFloat(prompt('Enter a number Fib'));

//   function fibonacci(n) {
//       let arr = [0, 1, 2];
       
//       for (let i = 3; i < n; i++) {
       
//           arr[0] = arr[1];
//           arr[1] = arr[2];
//           arr[2] = arr[0] + arr[1];
        
//       }

//       return arr[2];
//   }
//   document.write(fibonacci(n));
 
 
//   variant 4

//  let n = prompt("Enter Fib")

//  function fib (n) {
//      if (n < 2) {
//          return [1];   
//      }
//      if (n < 3) {
//          return [1, 1];
//      }

//      let a = fib(n - 1);
//      a.push(a[n - 2] + a[n - 3]);
//      return a;
//  }
//   document.write(fib(n).slice(-1));