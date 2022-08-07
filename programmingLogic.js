function sumMultiple(){
  let x = 3
  let value = 0
  for(let i = 0; i < 1000; i++){
    if(i % x == 0){
      value += i
    }
  }
  return value
}
console.log(sumMultiple())