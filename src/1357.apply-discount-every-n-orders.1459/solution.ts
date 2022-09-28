class Cashier {
    n:number;
    discount:number;
    rest:number;
    priceMap:Map<number, number>;
    constructor (n: number, discount: number, products: number[], prices: number[]) {
        this.n = n;
        this.discount = 1 - discount / 100;
        const map = new Map<number, number>();
        for (let i = 0; i < products.length; i++) {
            map.set(products[i], prices[i]);
        }
        this.priceMap = map;
        this.rest = n;
    }

    getBill (product: number[], amount: number[]): number {
        this.rest--;
        let total = 0;
        for (let i = 0; i < product.length; i++) {
            total += amount[i] * this.priceMap.get(product[i]);
        }
        if (this.rest === 0) {
            total *= this.discount;
            this.rest = this.n;
        }
        return total;
    }
}

/**
 * Your Cashier object will be instantiated and called as such:
 * var obj = new Cashier(n, discount, products, prices)
 * var param_1 = obj.getBill(product,amount)
 */
