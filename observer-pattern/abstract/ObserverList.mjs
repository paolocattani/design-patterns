export class ObserverList {
    constructor() {
        this.observers = [];
    }

    add(obj) {
        this.observers.push(obj);
    }

    count() {
        return this.observers.length;
    }

    get(index) {
        if (index > -1 && index < this.observers.length) {
            return this.observers[index];
        }
    }

    indexOf(obj, startIndex) {
        let i = startIndex;

        while (i < this.observers.length) {
            if (this.observers[i] === obj) {
                return i;
            }
            i++;
        }

        return -1;
    }

    removeAt(index) {
        this.observers.splice(index, 1);
    }
}