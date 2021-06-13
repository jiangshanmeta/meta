class StackOfPlates {
    stacks:number[][];
    constructor (protected cap: number) {
        this.stacks = [];
    }

    push (val: number): void {
        if (this.cap < 1) {
            return;
        }
        if (this.stacks.length === 0 || this.stacks[this.stacks.length - 1].length === this.cap) {
            const stack = [val, ];
            this.stacks.push(stack);
        } else {
            const last = this.stacks[this.stacks.length - 1];
            last.push(val);
        }
    }

    pop (): number {
        if (this.cap < 1 || this.stacks.length === 0) {
            return -1;
        }
        const last = this.stacks[this.stacks.length - 1];
        const val = last.pop()!;
        if (last.length === 0) {
            this.stacks.pop();
        }
        return val;
    }

    popAt (index: number): number {
        if (this.cap < 1 || index >= this.stacks.length) {
            return -1;
        }
        const stack = this.stacks[index];
        const val = stack.pop();
        if (stack.length === 0) {
            this.stacks.splice(index, 1);
        }
        return val;
    }
}

/**
 * Your StackOfPlates object will be instantiated and called as such:
 * var obj = new StackOfPlates(cap)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAt(index)
 */
