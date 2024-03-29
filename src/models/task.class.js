// import { LEVELS } from "./levels.enum";

export class Task {
    id = "";
    name = "";
    description= "";
    date= "";
    notes= []
    completed = false;
    
    constructor(name,description,completed , level){
        this.id = Date.now();
        this.name = name;
        this.date = new Date().toLocaleString();
        this.description = description;
        this.completed = completed;
        this.level = level;
    }
}