export function countNucleotides(strand) {
  let A = 0
  let C = 0
  let G = 0
  let T = 0
  if(/[BD-FH-SU-Z]/.test(strand)){throw new Error('Invalid nucleotide in strand')}
  if(strand === ""){return '0 0 0 0'}
  for(let i=0; i<strand.length ; i++){
    switch(strand[i]){
      case 'A':
        A += 1
        break;
      case 'C':
        C += 1
        break;
      case 'G':
        G += 1
        break;
      case 'T':
        T += 1
        break;
    }
  }
  
    let result = A+" "+C+" "+G+" "+T

    return result
}
