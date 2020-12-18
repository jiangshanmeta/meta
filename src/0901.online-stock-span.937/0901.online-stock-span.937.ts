class StockSpanner {
    private priceStack:number[];
    private countStack:number[];
    constructor() {
        this.priceStack = [];
        this.countStack = [];
    }

    next(price: number): number {
        let count = 1;
        while(this.priceStack.length && price>=this.priceStack[this.priceStack.length-1]){
            count += this.countStack.pop();
            this.priceStack.pop();
        }
        this.priceStack.push(price);
        this.countStack.push(count);
        return count;
    }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */