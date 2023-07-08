function distanceTraveled (mainTank: number, additionalTank: number): number {
    let result = 0;
    while (mainTank >= 5) {
        result += 50;
        mainTank -= 5;
        if (additionalTank >= 1) {
            mainTank += 1;
            additionalTank -= 1;
        }
    }
    return result + mainTank * 10;
}
