import { ConcreteSubject } from "./implementation/ConcreteSubject.mjs";
import { ConcreteObserver } from "./implementation/ConcreteObserver.mjs";

class Bomb {
    constructor(timer) {
        this.timer = timer;
    }

    explode(timer) {
        console.log("The bomb gonna explode in " + timer);
    }
}


const bomb = new Bomb(5);
const subject = new ConcreteSubject(bomb);

const blaster1 = new ConcreteObserver("Blaster 1");
subject.addObserver(blaster1);
const blaster2 = new ConcreteObserver("Blaster 2");
subject.addObserver(blaster2);
const blaster3 = new ConcreteObserver("Blaster 3");
subject.addObserver(blaster3);

bomb.explode();

subject.removeObserver(blaster1);
subject.removeObserver(blaster2);
subject.removeObserver(blaster3);

bomb.explode();
