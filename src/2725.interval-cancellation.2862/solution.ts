function cancellable (fn: Function, args: any[], t: number): Function {
    fn(...args);
    const id = setInterval(() => fn(...args), t);
    return () => clearInterval(id);
}
