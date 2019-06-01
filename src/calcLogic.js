export class SpaceDate {
  constructor(date) {
    this.birthDate = new Date(date);
    this.age = 0;
    this.ageOnMercury = 0;
    this.ageOnVenus =0;
    this.ageOnMars = 0;
    this.ageOnJupiter = 0;
    this.fullYear = 0;
    this.deathDay = 0;
    Object.assign(this, date);
  }

  getCurrentAge(date, currentYear){

    let birthYear = new Date(date).getFullYear();
    this.age = currentYear - birthYear;

  }
  getYear(date){
    let inputDate = new Date(date);
    let parsedYear = inputDate.getFullYear();
    this.fullYear = parsedYear;
  }
  getAgeOnMercury(){
    let currentYear = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let age = currentYear - birthYear;
    this.ageOnMercury += Math.floor(age * .24);
    return this.ageOnMercury;

  }

  getAgeOnVenus(){
    let currentYear = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let age = currentYear - birthYear;
    this.ageOnVenus = Math.floor(age * .62);
    return this.ageOnVenus;
  }
  getAgeOnMars(){
    let currentYear = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let age = currentYear - birthYear;
    this.ageOnMars = Math.floor(age * 1.88);
    return this.ageOnMars;
  }
  getAgeOnJupiter(){
    let currentYear = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let age = currentYear - birthYear;
    this.ageOnJupiter = Math.floor(age * 11.86);
    return this.ageOnJupiter;
  }
  getYearsTillDeath( userYear, planet){
    let currentYear = new Date().getFullYear();
    let birthYear = this.birthDate.getFullYear();
    let age = currentYear - birthYear;
    if(planet === 'Mercury'){
      let mercuryAge = Math.floor(age * .24);
      if(mercuryAge < userYear){
        this.deathDay = userYear - mercuryAge;
        return this.deathDay;
      }else if(mercuryAge > userYear){
        this.deathDay = mercuryAge - userYear;
        return this.deathDay;
      }
    }
    if(planet === 'Venus'){
      let venusAge = Math.floor(age * .62);
      if(venusAge < userYear){
        this.deathDay = userYear - venusAge;
        return this.deathDay;
      }else if(venusAge > userYear){
        this.deathDay = venusAge - userYear;
        return this.deathDay;
      }
    }
    if(planet === 'Mars'){
      let marsAge = Math.floor(age * 1.88);
      if(marsAge < userYear){
        this.deathDay = userYear - marsAge;
        return this.deathDay;
      }else if(marsAge > userYear){
        this.deathDay = marsAge - userYear;
        return this.deathDay;
      }
    }
    if(planet === 'Jupiter'){
      let jupiterAge = Math.floor(age * 11.86);
      if(jupiterAge < userYear){
        this.deathDay = userYear - jupiterAge;
        return this.deathDay;
      }else if(jupiterAge > userYear){
        this.deathDay = jupiterAge - userYear;
        return this.deathDay;
      }
    }
  }
}


