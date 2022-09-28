function averageWaitingTime (customers: number[][]): number {
    let time = 0;
    let result = 0;
    for (let i = 0; i < customers.length; i++) {
        const [arrival, wait, ] = customers[i];
        if (time > arrival) {
            time += wait;
            result += time - arrival;
        } else {
            result += wait;
            time = arrival + wait;
        }
    }
    return result / customers.length;
}
