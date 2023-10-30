class Stack {
    constructor(maxSize = 10) {
        if (typeof maxSize !== 'number' || maxSize < 0 || isNaN(maxSize) || isFinite(maxSize)) {
            throw new Error('Invalid stack size')
        }
        this.maxSize = maxSize;
        this.stackElements = [];
    }

    push(elem) {
        if (this.stackElements.length >= this.maxSize) {
            throw new Error('Stack is overflow');
        }
        this.stackElements.push(elem);
    }

    pop() {
        if (this.isEmpty()) {
            throw new Error('Stack is empty');
        }
        return this.stackElements.pop();
    }

    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.stackElements.at(-1);
    }

    isEmpty() {
        return this.stackElements.length === 0;
    }

    toArray() {
        return [...this.stackElements];
    }

    static fromIterable(iterable) {
        if (!Symbol.iterator in Object(iterable)) {
            throw new Error('Entity is not an iterable.');
        }
        const stack = new Stack(iterable.length);
        for (const item of iterable) {
            stack.push(item);
        }
        return stack;
    }
}
