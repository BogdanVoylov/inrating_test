import {clone} from "@/lib/arrays";

export default class Storage{
    static key(){
        return "entities"
    }

    constructor() {
        const saved = localStorage.getItem(Storage.key());
        if(saved == null || saved === ""){
            this.entities = []
        }else {
            this.entities = JSON.parse(saved);
        }
    }

    create(entity){
        this.entities.push(entity)
    }

    update(index, entity){
        this.entities[index] = entity
    }

    getAll(){
        return clone(this.entities)
    }

    delete(index){
        this.entities.splice(index,1)
    }

    save(){
        console.log(this.entities)
        localStorage.setItem(Storage.key(),JSON.stringify(this.entities))
    }

}
