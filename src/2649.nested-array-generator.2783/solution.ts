type MultidimensionalArray = (MultidimensionalArray | number)[]

function * inorderTraversal (arr: MultidimensionalArray): Generator<number, void, unknown> {
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            yield * inorderTraversal(arr[i] as MultidimensionalArray);
        } else {
            yield arr[i] as number;
        }
    }
}

/**
 * const gen = inorderTraversal([1, [2, 3]]);
 * gen.next().value; // 1
 * gen.next().value; // 2
 * gen.next().value; // 3
 */
