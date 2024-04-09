const alphabet = 'abcdefghijklmnopqrstuvwxyz'
const alphabetLength = alphabet.length
const firstCharCode = alphabet.charCodeAt(0)
const randomKeyLength = 100
const validKeyPattern = /^[a-z]+$/

export class Cipher {
  static generateRandomKey(){
    let concattedKey = ''
    for (let i = 0; i <randomKeyLength; i++){
      concattedKey += Cipher.randomChar()
    }
    return concattedKey
  }

  static randomChar(){
    return String.fromCharCode(Math.floor(Math.random() * alphabetLength) + firstCharCode)
  }

  static validateKey(key){
    if(validKeyPattern.test(key)){
      return key
    }
    throw new Error('Bad key.')
  }

  constructor(key){
    this.key = (key === undefined && Cipher.generateRandomKey()) ||                                      Cipher.validateKey(key)
    this.encode = this.process.bind(this, 1)
    this.decode = this.process.bind(this, -1)
    }  

  shiftBy(index){
    return this.key.charCodeAt(index % this.key.length) - firstCharCode
  }

  process(direction, input){
    const outputLength = input.length
    let output = ''
    for(let i= 0; i < outputLength; i++){
      output += String.fromCharCode(this.shiftCharCode(input.charCodeAt(i),direction, i))
    }
    return output
  }
  shiftCharCode(charCode, direction, index){
    const shiftValue = direction * this.shiftBy(index)
    return ((charCode - firstCharCode + shiftValue + alphabetLength) % alphabetLength) + firstCharCode
  }
}
