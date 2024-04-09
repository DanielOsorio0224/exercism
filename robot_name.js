const letters = [...'QWERTYUIOPASDFGHJKLÑZXCVBNM']
const numbers = [1,2,3,4,5,6,7,8,9,0]

const allNames = []

letters.forEach(a => {
  letters.forEach(b => {
    numbers.forEach(c => {
      numbers.forEach(d => {
        numbers.forEach(e => {
          allNames.push([a,b,c,d,e].join(''))
        })
      })
    })
  })
})

const shuffled = allNames
let shuffledPointer = -1

function shuffleNames(){
  let j,x,i

  for (i = shuffled.length -1 ; i > 0 ; i -= 1 ){
    j = Math.floor(Math.random() * (i+1))
    x = shuffled[i]
    shuffled[i] = shuffled[j]
    shuffled[j] = x
  }
}

function generateName(){
  shuffledPointer += 1
  if (shuffledPointer > shuffled.length){
    throw new Error('Can not generate another name because all the names have been used.')
  }
  return shuffled[shuffledPointer]
}

shuffleNames()

export class Robot {
  constructor(){
    this._name = generateName()
  }

  get name() {return this._name}

  reset() {
    this._name = generateName()
  }
}

Robot.releaseNames = () => { shuffledPointer = -1}
