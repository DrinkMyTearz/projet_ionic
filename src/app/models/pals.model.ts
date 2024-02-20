export class Pals {
    id?: string;
    pictureLink: string;
    number: number;
    name: string;
    description: string;
    type1: string;
    type2: string;
    work: Array<string>;

    constructor() {
        this.pictureLink = '';
        this.number = 0;
        this.name = '';
        this.description = '';
        this.type1 = '';
        this.type2 = '';
        this.work = [];
    }
}
