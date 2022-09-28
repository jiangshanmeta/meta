class LLNode<T> {
    next:LLNode<T>|null = null;
    constructor (public val:T) {

    }
}

class MyLinkedList {
    head:LLNode<number>;
    length = 0;
    constructor () {
        this.head = new LLNode(0);
    }

    get (index: number): number {
        if (index >= this.length) {
            return -1;
        }
        let node = this.head.next;
        while (index > 0) {
            node = node.next;
            index--;
        }
        return node.val;
    }

    addAtHead (val: number): void {
        this.addAtIndex(0, val);
    }

    addAtTail (val: number): void {
        this.addAtIndex(this.length, val);
    }

    addAtIndex (index: number, val: number): void {
        if (index > this.length) {
            return;
        }
        let head = this.head;
        while (index > 0) {
            index--;
            head = head.next;
        }
        const node = new LLNode(val);
        node.next = head.next;
        head.next = node;

        this.length++;
    }

    deleteAtIndex (index: number): void {
        if (index >= this.length) {
            return;
        }
        let head = this.head;
        while (index > 0) {
            head = head.next;
            index--;
        }
        head.next = head.next.next;
        this.length--;
    }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
