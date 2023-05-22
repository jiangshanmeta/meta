class ArrayWrapper {
    private value:number;
    private str: string;
    constructor (nums: number[]) {
        this.value = nums.reduce((acc, item) => acc + item, 0);
        this.str = '[' + nums.join(',') + ']';
    }

    valueOf () {
        return this.value;
    }

    toString () {
        return this.str;
    }
}

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */
