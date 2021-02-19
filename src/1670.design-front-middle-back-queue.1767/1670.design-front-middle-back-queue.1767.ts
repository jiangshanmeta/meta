class DoubleLinkedList{
    public val:number;
    public prev:DoubleLinkedList|null;
    public next:DoubleLinkedList|null;
    constructor(val:number){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}

function insertAfter(prev:DoubleLinkedList,node:DoubleLinkedList){
    node.next = prev.next;
    (node.next!).prev = node;
    prev.next = node;
    node.prev = prev;
}

function removeAfter(node:DoubleLinkedList){
    const next = node.next;
    node.next = next.next;
    (node.next!).prev = node;
    next.prev = null;
    next.next = null;
}

class FrontMiddleBackQueue {
    public head:DoubleLinkedList;
    public tail:DoubleLinkedList;
    public middle:DoubleLinkedList|null;
    public size:number;
    constructor() {
        this.head = new DoubleLinkedList(0);
        this.tail = new DoubleLinkedList(0);
        this.middle = null;
        this.size = 0;
    }

    pushEmpty(node:DoubleLinkedList){
        this.head.next = node;
        node.prev = this.head;
        node.next = this.tail;
        this.tail.prev = node;
        this.middle = node;
    }

    pushFront(val: number): void {
        const node = new DoubleLinkedList(val);
        const size = this.size;
        this.size++;
        if(size === 0){
            this.pushEmpty(node);
            return;
        }
        insertAfter(this.head,node);
        if(size&1){
            this.middle = this.middle.prev;
        }
    }

    pushMiddle(val: number): void {
        const node = new DoubleLinkedList(val);
        const size = this.size;
        this.size++;
        if(size === 0){
            this.pushEmpty(node);
            return;
        }
        if(size&1){
            insertAfter(this.middle.prev,node)
            this.middle = this.middle.prev;
        }else{
            insertAfter(this.middle,node);
            this.middle = this.middle.next;
        }
    }

    pushBack(val: number): void {
        const node = new DoubleLinkedList(val);
        const size = this.size;
        this.size++;
        if(size === 0){
            this.pushEmpty(node);
            return;
        }
        insertAfter(this.tail.prev,node);
        if(size%2 === 0){
            this.middle = this.middle.next;
        }
    }

    popEmpty():number{
        const val = (this.middle!).val;
        this.middle = null;
        this.head.next = this.tail;
        this.tail.prev = this.head;
        return val;
    }

    popFront(): number {
        const size = this.size;
        if(size === 0){
            return -1;
        }
        this.size--;
        if(size === 1){
            return this.popEmpty();
        }
        const val = this.head.next.val;
        if(size%2 === 0){
            this.middle = this.middle.next;
        }

        removeAfter(this.head);
        return val;
    }

    popMiddle(): number {
        const size = this.size;
        if(size === 0){
            return -1;
        }
        this.size--;
        if(size === 1){
            return this.popEmpty();
        }
        const val = this.middle.val;
        const prev = this.middle.prev;
        if(size&1){
            this.middle = this.middle.prev;
        }else{
            this.middle = this.middle.next;
        }
        removeAfter(prev);
        
        return val;
    }

    popBack(): number {
        const size = this.size;
        if(size === 0){
            return -1;
        }
        this.size--;
        if(size === 1){
            return this.popEmpty();
        }
        const val = this.tail.prev.val;
        removeAfter(this.tail.prev.prev);
        if(size&1){
            this.middle = this.middle.prev;
        }

        return val;
    }
}

/**
 * Your FrontMiddleBackQueue object will be instantiated and called as such:
 * var obj = new FrontMiddleBackQueue()
 * obj.pushFront(val)
 * obj.pushMiddle(val)
 * obj.pushBack(val)
 * var param_4 = obj.popFront()
 * var param_5 = obj.popMiddle()
 * var param_6 = obj.popBack()
 */