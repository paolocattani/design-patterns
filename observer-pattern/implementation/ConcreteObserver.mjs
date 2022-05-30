import { Observer } from "../abstract/Observer.mjs";

export class ConcreteObserver extends Observer {
    constructor(name) {
        super();
        this.name = name;
    }

    update(message) {
        console.log(`[${this.name}] received a message from subject : "${message}"`);
    }
}

export { };