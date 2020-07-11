/**
 * @param {number} n
 * @param {number} discount
 * @param {number[]} products
 * @param {number[]} prices
 */
var Cashier = function(n, discount, products, prices) {
    const productPriceMap = {};
    for(let i=0;i<products.length;i++){
        productPriceMap[products[i]] = prices[i];
    }
    this.productPriceMap = productPriceMap;
    this.n = n;
    this.discount = 1-discount/100;
    this.counter = 0;
};

/** 
 * @param {number[]} product 
 * @param {number[]} amount
 * @return {number}
 */
Cashier.prototype.getBill = function(product, amount) {
    this.counter = (this.counter+1)%this.n;
    let total = 0;
    for(let i=0;i<product.length;i++){
        total += amount[i]*this.productPriceMap[product[i]];
    }
    if(this.counter === 0){
        total *= this.discount;
    }
    return total;
};