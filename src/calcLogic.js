export class SpaceDate {
    constructor(birthDate) {
        this.birthDate = '1984 04 20';
        this.age = 0;
        this.ageOnMercury = 0;
        this.ageOnVenus =0;
        this.ageOnMars = 0;
        this.ageOnJupiter = 0;
        this.fullYear = 0;
        this.deathDay = 0;
        Object.assign(this, birthDate);
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
    getAgeOnMercury(date){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        let age = currentYear - birthYear;
        this.ageOnMercury = Math.floor(age * .24);
    }
    getAgeOnVenus(date){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        let age = currentYear - birthYear;
        this.ageOnVenus = Math.floor(age * .62);
    }
    getAgeOnMars(date){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        let age = currentYear - birthYear;
        this.ageOnMars = Math.floor(age * 1.88);
    }
    getAgeOnJupiter(date){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        let age = currentYear - birthYear;
        this.ageOnJupiter = Math.floor(age * 11.86);
    }
    getYearsTillDeath(date, userYear, planet){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        let age = currentYear - birthYear;
        if(planet === 'Mecurey'){
           let mecureyAge = Math.floor(age * .24);
            if(mecureyAge < userYear){
                this.deathDay = userYear - mecureyAge;
            }else if(mecureyAge > userYear){
                this.deathDay = mecureyAge - userYear;
            }
        }
        if(planet === 'Venus'){
            let venusAge = Math.floor(age * .62);
            if(venusAge < userYear){
                this.deathDay = userYear - venusAge;
            }else if(venusAge > userYear){
                this.deathDay = venusAge - userYear;
            }
        }
        if(planet === 'Mars'){
            let marsAge = Math.floor(age * 1.88);
            if(marsAge < userYear){
                this.deathDay = userYear - marsAge;
            }else if(marsAge > userYear){
                this.deathDay = marsAge - userYear;
            }
        }
        if(planet === 'Jupiter'){
            let jupiterAge = Math.floor(age * 11.86);
            if(jupiterAge < userYear){
                this.deathDay = userYear - jupiterAge;
            }else if(jupiterAge > userYear){
                this.deathDay = jupiterAge - userYear;
            }
        }
    }
}

