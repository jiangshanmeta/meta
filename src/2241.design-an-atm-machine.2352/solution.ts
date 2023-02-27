class ATM {
    private values = [20, 50, 100, 200, 500, ]
    private counts = [0, 0, 0, 0, 0, ]
    constructor () {

    }

    deposit (banknotesCount: number[]): void {
        for (let i = 0; i < banknotesCount.length; i++) {
            this.counts[i] += banknotesCount[i];
        }
    }

    withdraw (amount: number): number[] {
        const result = [0, 0, 0, 0, 0, ];
        const counts = this.counts;
        let index = 4;
        while (index > -1 && amount > 0) {
            const count = Math.min(Math.floor(amount / this.values[index]), counts[index]);
            result[index] = count;
            amount -= count * this.values[index];
            index--;
        }
        if (amount > 0) {
            return [-1, ];
        }
        for (let i = 0; i < 5; i++) {
            counts[i] -= result[i];
        }
        return result;
    }
}

/**
 * Your ATM object will be instantiated and called as such:
 * var obj = new ATM()
 * obj.deposit(banknotesCount)
 * var param_2 = obj.withdraw(amount)
 */
