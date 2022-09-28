class TripleInOne {
    stacks:number[];
    indexs:number[];
    constructor (public stackSize: number) {
        this.stacks = new Array(stackSize * 3);
        this.indexs = [-1, stackSize - 1, 2 * stackSize - 1, ];
    }

    push (stackNum: number, value: number): void {
        const maxValidIndex = (stackNum + 1) * this.stackSize - 1;
        if (this.indexs[stackNum] < maxValidIndex) {
            this.stacks[++this.indexs[stackNum]] = value;
        }
    }

    pop (stackNum: number): number {
        const emptyIndex = stackNum * this.stackSize - 1;
        if (this.indexs[stackNum] === emptyIndex) {
            return -1;
        }
        return this.stacks[this.indexs[stackNum]--];
    }

    peek (stackNum: number): number {
        const emptyIndex = stackNum * this.stackSize - 1;
        if (this.indexs[stackNum] === emptyIndex) {
            return -1;
        }
        return this.stacks[this.indexs[stackNum]];
    }

    isEmpty (stackNum: number): boolean {
        const emptyIndex = stackNum * this.stackSize - 1;
        return this.indexs[stackNum] === emptyIndex;
    }
}

/**
 * Your TripleInOne object will be instantiated and called as such:
 * var obj = new TripleInOne(stackSize)
 * obj.push(stackNum,value)
 * var param_2 = obj.pop(stackNum)
 * var param_3 = obj.peek(stackNum)
 * var param_4 = obj.isEmpty(stackNum)
 */
