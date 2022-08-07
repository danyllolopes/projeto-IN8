function recursiveFunction(n = 1){  
      if (n % 2 == 0 && n % 3 == 0 && n % 10 == 0) {
            return n
      }else {
        return recursiveFunction(n - 1)
      }                
   }
 
console.log(recursiveFunction(100))