/**
 * @param {number[]} nums
 */
function LinkedListNode (key) {
    this.key = key;
    this.prev = null;
    this.next = null;
}

function removeNode (node) {
    const prev = node.prev;
    const next = node.next;
    prev.next = next;
    next.prev = prev;
    node.prev = null;
    node.next = null;
}

var FirstUnique = function (nums) {
    this.uniqueMap = {};
    this.keyNodeMap = {};
    this.head = new LinkedListNode(null);
    this.tail = new LinkedListNode(null);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    nums.forEach((num) => {
        this.add(num);
    });
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function () {
    if (this.head.next === this.tail) {
        return -1;
    }
    return this.head.next.key;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function (value) {
    if (value in this.uniqueMap) {
        if (this.uniqueMap[value]) {
            this.uniqueMap[value] = false;
            removeNode(this.keyNodeMap[value]);
            delete this.keyNodeMap[value];
        }
    } else {
        const node = new LinkedListNode(value);
        const prev = this.tail.prev;
        const next = this.tail;
        prev.next = node;
        node.prev = prev;
        node.next = next;
        next.prev = node;
        this.uniqueMap[value] = true;
        this.keyNodeMap[value] = node;
    }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
