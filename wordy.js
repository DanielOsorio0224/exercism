const operations = {
    'plus': (num1,num2) => Number(num1) + Number(num2),
    'minus': (num1,num2) => Number(num1) - Number(num2),
    'multiplied': (num1,num2) => Number(num1) * Number(num2),
    'divided': (num1,num2) => Number(num1) / Number(num2),
  }
  
  export const answer = (question) => {
    let questionArr = question.replace(/\?|What is|by\s/g, '').trim().split(' ')
  
    let answer = Number(questionArr[0]) || NaN
  
    for ( let i = 1; i < questionArr.length ; i+=2 ){
      if(!Number.isInteger(Number(questionArr[i]))){
        if(!(questionArr[i] in operations)) throw new Error('Unknown operation')
        answer = operations[questionArr[i]](questionArr[i-1], questionArr[i+1])
        questionArr[i+1] = answer
      }else if(Number.isInteger(Number(questionArr[i-1])) && 
              Number.isInteger(Number(questionArr[i]))) throw new Error('Syntax error')
    }
    if(!Number.isInteger(answer))throw new Error('Syntax error')
  
    return answer
  };
  