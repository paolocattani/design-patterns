import { Subject } from "../abstract/Subject.mjs";
export class ConcreteSubject extends Subject {
    constructor(element) {
        super();
        this.element = element;

        const explosion = element.explode;
        element.explode = () => {
            this.notify(`Timer set at ${this.element.timer}s`)
            explosion(this.element.timer);
        }
    }
}