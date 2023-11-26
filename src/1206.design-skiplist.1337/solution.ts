class SkipListNode {
    public forward: Array<SkipListNode | null>
    constructor (public value:number, public level:number, next: SkipListNode | null = null) {
        this.forward = new Array<SkipListNode | null>(level + 1);
        for (let i = 0; i <= level; i++) {
            this.forward[i] = next;
        }
    }
}

const P_FACTOR = 0.25;
const MAX_LEVEL = 32;

const randomLevel = () => {
    let lv = 1;
    while (Math.random() < P_FACTOR && lv < MAX_LEVEL) {
        lv++;
    }
    return lv;
};

class Skiplist {
    length:number;
    level:number;
    head:SkipListNode;
    tail:SkipListNode;
    constructor () {
        this.length = 0;
        this.level = 0;
        this.tail = new SkipListNode(Infinity, 0);
        this.head = new SkipListNode(-Infinity, MAX_LEVEL, this.tail);
    }

    search (target:number):boolean {
        let p = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (p.forward[i]!.value < target) {
                p = p.forward[i]!;
            }
        }
        p = p.forward[0]!;
        return p.value === target;
    }

    add (num:number):void {
        const update = new Array<SkipListNode>(this.level + 1);

        let p = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (p.forward[i]!.value < num) {
                p = p.forward[i]!;
            }
            update[i] = p;
        }

        let lv = randomLevel();
        if (lv > this.level) {
            this.level++;
            lv = this.level;
            update[lv] = this.head;
        }

        const newNode = new SkipListNode(num, lv);

        for (let i = lv; i >= 0; i--) {
            const p = update[i];
            newNode.forward[i] = p.forward[i];
            p.forward[i] = newNode;
        }

        this.length++;
    }

    erase (num: number): boolean {
        const update = new Array<SkipListNode>(this.level + 1);

        let p = this.head;
        for (let i = this.level; i >= 0; i--) {
            while (p.forward[i]!.value < num) {
                p = p.forward[i]!;
            }
            update[i] = p;
        }

        p = p.forward[0]!;
        if (p.value !== num) {
            return false;
        }

        for (let i = 0; i <= this.level; i++) {
            if (update[i].forward[i] !== p) {
                break;
            }
            update[i].forward[i] = p.forward[i];
        }

        while (this.level > 0 && this.head.forward[this.level] === this.tail) {
            this.level--;
        }
        this.length--;
        return true;
    }
}
