export class SpaceDate {
    constructor(birthDate) {
        this.birthDate = '1984 04 20';
        Object.assign(this, birthDate);
    }

    getCurrentAge(date){
        let parsedDate = parseInt(date);
        return parsedDate - this.birthDate;
    }
}

