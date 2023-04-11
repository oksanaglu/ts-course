"use strict";
class House {
    constructor(key) {
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    comeIn(person) {
        if (!this.door) {
            throw new Error('Door is close!');
        }
        this.tenants.push(person);
        console.log('Person inside!');
    }
}
class myHouse extends House {
    openDoor(key) {
        if (key.getSignature() !== this.key.getSignature()) {
            throw new Error('Key to another door');
        }
        return this.door = true;
    }
}
class Key {
    constructor() {
        this.signature = Math.random();
    }
    getSignature() {
        return this.signature;
    }
}
class Person {
    constructor(key) {
        this.key = key;
    }
    getKey() {
        return this.key;
    }
}
const key = new Key();
const house = new myHouse(key);
const person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
//# sourceMappingURL=app.js.map