/**
 * @param {number} n
 */
var MRUQueue = function (n) {
    this.maxSize = Math.floor(Math.sqrt(n));
    this.nodes = [];
    let index = 1;
    while (index <= n) {
        const node = new SqrtNode();
        while (index <= n && node.data.length < this.maxSize) {
            node.data.push(index++);
        }
        this.nodes.push(node);
    }
};

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
    let index = 0;
    k--;
    while (index < this.nodes.length && k >= this.nodes[index].data.length) {
        k -= this.nodes[index++].data.length;
    }
    const data = this.nodes[index].data;
    const result = data[k];
    data.splice(k, 1);
    if (data.length === 0) {
        this.nodes.splice(index, 1);
    }
    const last = this.nodes[this.nodes.length - 1];
    if (last && last.data.length < this.maxSize) {
        last.data.push(result);
    } else {
        const node = new SqrtNode();
        node.data.push(result);
        this.nodes.push(node);
    }
    return result;
};

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */

class SqrtNode {
    constructor () {
        this.data = [];
    }
}
