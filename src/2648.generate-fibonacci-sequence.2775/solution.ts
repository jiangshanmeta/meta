function * fibGenerator (): Generator<number, any, number> {
    let n1 = 0;
    let n2 = 1;

    yield n1;
    yield n2;
    while (true) {
        const n = n1 + n2;
        yield n;
        n1 = n2;
        n2 = n;
    }
}

/**
   * const gen = fibGenerator();
   * gen.next().value; // 0
   * gen.next().value; // 1
   */
