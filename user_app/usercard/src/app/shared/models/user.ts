export class UserModel implements User {
    id: number;
    name: string;
    age: number;
    city?: string;
    knowledge: Knowledge[];

    constructor(id: number, name: string, age: number, knowledge: Knowledge[], city?: string) {
        this.id = id;
        this.name = name;
        this.age = age;
        this.city = city;
        this.knowledge = knowledge;
    }
}

export interface User {
    id: number;
    name: string;
    age: number;
    city?: string;
    knowledge: Knowledge[];
}

export interface Knowledge {
    language: string;
    frameworks: string[];
}
