const alergicScore = {
    eggs:1,
    peanuts:2,
    shellfish:4,
    strawberries:8,
    tomatoes:16,
    chocolate:32,
    pollen:64,
    cats:128
  }
  
  export class Allergies {
    constructor(value) {
      this.value = value
    }
  
    list() {
      return Object.keys(alergicScore).filter(allergy => this.allergicTo(allergy))
    }
  
    allergicTo(allergy) {
      return !!(this.value & alergicScore[allergy])
    }
  }
  