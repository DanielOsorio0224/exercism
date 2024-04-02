const book_cost = 800
const discount = {
  '1' : 0,
  '2' : 0.05,
  '3' : 0.1,
  '4' : 0.2,
  '5' : 0.25  
}
  
export const cost = (books) => {
  let total = 0
  const subsets = []

  while( books.length > 0){
    const subset = []
    for(let i = 0; i < books.length;i++){
      const book = books[i]
      if(!subset.includes(book)){
        subset.push(book)
        books.splice(i, 1)
        i--
      }
    }
    subsets.push(subset)
  }

  for (let j=0; j < subsets.length; j++){
    for(let k = j+1; k < subsets.length; k++){
      if(subsets[j].length === 5 && subsets[k].length === 3){
        subsets[k].push(subsets[j].pop())
      }
    }
  }

  subsets.forEach(subset => {
    total += subset.length * (book_cost - (book_cost * discount[subset.length]))
  })
  return total  
};
