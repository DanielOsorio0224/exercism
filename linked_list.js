class Node{
    constructor({value,next,prev}){
      this.value = value
      this.next = next
      this.prev = prev
    }
  }
  
  export class LinkedList {
    constructor(){
      this.head = null
      this.tail = null
    }  
  
    clear(){
      this.head = null
      this.tail = null
    }
    
    push(value) {
      const element = new Node({value, next: this.head})
  
      if(this.head){
        this.head.prev = element
      }else{
        this.tail = element
      }
      this.head = element
    }
  
    pop() {
      if(!this.head){
        throw new Error('list is empty')
      }
      const {value} = this.head
  
      if(this.head.next){
        this.head = this.head.next
        this.head.prev = null
      }else{
        this.clear()
      }
      return value
    }
  
    shift() {
      if(!this.tail){
        throw new Error('list is empty')
      }
      const {value} = this.tail
  
      if(this.tail.prev){
        this.tail = this.tail.prev
        this.tail.next = null
      }else{
        this.clear()
      }
      return value
    }
  
    unshift(value) {
      const element = new Node({value, prev: this.tail})
      if(this.tail){
        this.tail.next = element
      }else{
        this.head = element
      }
      this.tail = element
    }
  
    delete(value) {
      let element = this.head
      while(element){
        if(element.value !== value){
          element = element.next
          continue
        }
        if(element.next){
          element.next.prev = element.prev
        }else{
          this.tail = this.tail.prev
        }
        if(element.prev){
          element.prev.next = element.next
        }else{
          this.head = this.head.next
        }
        break
      }
    }
  
    count() {
      let count = 0
      let element = this.head
  
      while(element){
        count++
        element = element.next
      }
      return count
    }
  }
  