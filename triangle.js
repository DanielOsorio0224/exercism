export class Triangle {
    constructor(a,b,c) {
      this.a = a;
      this.b = b;
      this.c = c
    }
  
    isValid(){
      if(this.a <= 0 || this.b <= 0 || this.c <= 0){return false}
      if(this.a + this.b <= this.c || this.b + this.c <= this.a || this.a + this.c <= this.b){
      return false
    }
  
    return true
    }
    
    get isEquilateral() {
      if(this.isValid()){
        return (this.a === this.b && this.a === this.c)  
      }else{
        return false
      }    
    }
  
    get isIsosceles() {
      if(this.isValid()){
        return (this.a === this.b || this.a === this.c || this.b === this.c)
      } else {
        return false
      }
    }
  
    get isScalene() {
      if(this.isValid()){
        return(this.a !== this.b && this.a !== this.c)
      }else{
        return false
      }
    }
  }
  