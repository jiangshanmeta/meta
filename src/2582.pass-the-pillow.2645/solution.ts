function passThePillow (n: number, time: number): number {
    time %= 2 * (n - 1);
    if (time > n - 1) {
        time -= (n - 1);
        return n - time;
    } else {
        return time + 1;
    }
}
