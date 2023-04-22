declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function (fn) {
    const result: any = {};
    for (let i = 0; i < this.length; i++) {
        const key = fn(this[i]);
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(this[i]);
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */
