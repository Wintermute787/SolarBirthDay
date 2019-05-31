export class SpaceDate {
    constructor(birthDate) {
        this.birthDate = '1984 04 20';
        this.age = 0;
        this.fullYear = 0;
        Object.assign(this, birthDate);
    }

    getCurrentAge(date){
        let currentYear = new Date().getFullYear();
        let birthYear = new Date(date).getFullYear();
        this.age = currentYear - birthYear;

    }
    getYear(date){
        let inputDate = new Date(date);
        let parsedYear = inputDate.getFullYear();
        this.fullYear = parsedYear;
    }
}

