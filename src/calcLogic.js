export class SpaceDate {
    constructor(birthDate) {
        this.birthDate = '1984 04 20';
        this.age = 0;
        Object.assign(this, birthDate);
    }

    getCurrentAge(date){
        let parsedDate = parseInt(date);
        this.age = parsedDate - this.birthDate;
    }
}

