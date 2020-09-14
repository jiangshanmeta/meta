var MaxQueue = function () {
    this.queen1 = new Queen();
    this.queen2 = new Queen();
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function () {
    if (this.queen2.isEmpty()) {
        return -1;
    } else {
        return this.queen2.getFirst();
    }
};

/**
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function (value) {
    this.queen1.push_back(value);
    this.queen2.addMax(value);
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function () {
    if (this.queen1.isEmpty()) {
        return -1;
    }
    const val = this.queen1.pop_front();
    if (this.queen2.getFirst() === val) {
        this.queen2.pop_front();
    }
    return val;
};

function Node (value) {
    this.value = value;
    this.next = null;
}

function Queen () {
    this.head = new Node(0);
    this.tail = this.head;
}

Queen.prototype.push_back = function (val) {
    const node = new Node(val);
    this.tail.next = node;
    this.tail = this.tail.next;
};
Queen.prototype.pop_front = function () {
    const node = this.head.next;
    this.head.next = node.next;
    if (this.head.next === null) {
        this.tail = this.head;
    }
    return node.value;
};

Queen.prototype.isEmpty = function () {
    return this.head === this.tail;
};

Queen.prototype.getFirst = function () {
    return this.head.next.value;
};
Queen.prototype.addMax = function (value) {
    let prev = this.head;
    let head = this.head.next;
    while (head && head.value >= value) {
        prev = prev.next;
        head = head.next;
    }

    const node = new Node(value);
    prev.next = node;
    this.tail = node;
};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
