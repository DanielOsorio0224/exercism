export const steps = (n) => {
    let steps = 0
    let result = n
    if(n <= 0){
      throw new Error('Only positive numbers are allowed')
    }
    if(n === 1){
      return 0
    }
    while(result > 1){
      if(result % 2 === 0){
        result = result/2
      }else{
       result = 3*result + 1
      }
      steps++
    }
    return steps
  };
  