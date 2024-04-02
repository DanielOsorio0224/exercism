export const rows = (numRows) => {
    if(numRows === 0) return []
    if(numRows === 1) return [[1]]
    let triangle =[]
    for(let row=1 ; row <= numRows ; row++){
      let rowArray = []
      for(let col = 0; col < row ; col++){
        if( col === 0 || col === (row - 1)){
          rowArray.push(1)
        }else{
          rowArray.push((triangle[row - 2][col - 1] + triangle[row - 2][col]))
        }
      }
      triangle.push(rowArray)
    }
    return triangle
  };