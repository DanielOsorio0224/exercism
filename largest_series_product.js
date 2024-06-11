export const largestProduct = (series,span) => {
  if(span === 0) return 1
  if(series.length < span) throw new Error('Span must be smaller than string length')
  if(series.match(/[a-z]/g)) throw new Error('Digits input must only contain digits')
  if(span < 0) throw new Error('Span must be greater than zero')

  const subSeriesArray = []
  for (let index = 0; index < series.length -1 ; index++) {
    const subSeries = series.substring(index, index + span)
    if(subSeries.length === span) {
      subSeriesArray.push(subSeries)
    }      
  }

  return Math.max(
    ...subSeriesArray.map(subseries => 
      subseries.split('').reduce((acc, curre)=>acc*curre,1)
    )
  )
};
