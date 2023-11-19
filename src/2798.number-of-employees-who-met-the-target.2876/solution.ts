function numberOfEmployeesWhoMetTarget (hours: number[], target: number): number {
    let result = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) {
            result++;
        }
    }
    return result;
}
