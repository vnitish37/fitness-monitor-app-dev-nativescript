export interface Item {
    id: number;
    name: string;
    role: string;
    onclick : string,
    src : String ,
}


export class Item1 {
    constructor(public id: number, public name: string, public role: string) { }
}





export class Country {
    constructor(public Country?: string, public Amount?: number, public SecondVal?: number, public ThirdVal?: number, public Impact?: number, public Year?: number) {
    }
}