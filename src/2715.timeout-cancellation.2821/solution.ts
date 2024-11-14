function cancellable (fn: Function, args: any[], t: number): Function {
    const canceled = { current: false, };
    setTimeout(() => {
        if (canceled.current) {
            return;
        }
        fn(...args);
    }, t);
    return () => {
        canceled.current = true;
    };
}

/**
 *  const result = []
 *
 *  const fn = (x) => x * 5
 *  const args = [2], t = 20, cancelT = 50
 *
 *  const log = (...argsArr) => {
 *      result.push(fn(...argsArr))
 *  }
 *
 *  const cancel = cancellable(fn, args, t);
 *
 *  setTimeout(() => {
 *     cancel()
 *     console.log(result) // [{"time":20,"returned":10}]
 *  }, cancelT)
 */
