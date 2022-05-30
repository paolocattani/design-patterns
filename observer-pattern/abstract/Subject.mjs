import { ObserverList } from "./ObserverList.mjs";

export class Subject {
    constructor() {
        this.observers = new ObserverList();
    }

    addObserver(observer) {
        const id = this.observers.count() || 0;
        console.log(`Registering observer #${id}: ${observer.name} `);
        this.observers.add({ id, observer });
    }

    removeObserver(observer) {
        console.log("Removing observer : ", observer.name);
        this.observers.removeAt(this.observers.indexOf(observer, 0));
    }

    notify(context) {
        const observerCount = this.observers.count();
        console.log("Sending notification to all observers : ", observerCount);
        for (let i = 0; i < observerCount; i++) {
            this.observers.get(i).observer.update(context);
        }
    }
}