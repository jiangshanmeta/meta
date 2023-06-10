async function addTwoPromises (promise1: Promise<number>, promise2: Promise<number>): Promise<number> {
    return Promise.all([promise1, promise2, ]).then(([a, b, ]) => a + b);
}
