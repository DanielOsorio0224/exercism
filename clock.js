export class Clock {
    constructor(hour, minute=0) {
      this.hour = hour;
      this.minute = minute;
      this.parse()
    }
  
    parse(){
      this.hour += Math.floor(this.minute/60)
      this.hour = this.hour % 24 < 0 ? 24 + (this.hour % 24) : this.hour % 24
      this.minute = this.minute % 60 < 0 ? 60 + (this.minute % 60) : this.minute % 60
    }
  
    toString() {
      return `${this.hour < 10 ? "0" : ""}${this.hour}:${this.minute < 10 ? "0": ""}${this.minute}`
    }
  
    plus(minutes) {
      this.minute += minutes
      this.parse()
      return this
    }
  
    minus(minutes) {
      this.minute -=minutes
      this.parse()
      return this
    }
  
    equals(clock) {
      return this.minute === clock.minute && this.hour === clock.hour
    }
  }
  