export const transform = (old) => {
    let result = {}
    for(let score in old){
      for(let letter of old[score]){
        result[letter.toLowerCase()] = Number(score)      
      }
    }
    return result
  };