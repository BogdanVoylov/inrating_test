import {clone} from "@/lib/arrays";

export default class Storage {
    static key() {
        return "entities";
    }

    constructor() {
        const saved = localStorage.getItem(Storage.key());
        if (saved == null || saved === "") {
            this.entities = [];
        } else {
            this.entities = JSON.parse(saved);
        }
    }

    create(entity) {
        this.entities = this.entities.concat(entity);
    }

    update(index, entity) {
        this.entities[index] = entity;
    }

    getAll() {
        return clone(this.entities);
    }

    delete(index) {
        console.log(this.entities);
        this.entities.splice(index, 1);
        console.log(this.entities);

    }

    save() {
        localStorage.setItem(Storage.key(), JSON.stringify(this.entities));
    }

}
