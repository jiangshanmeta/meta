
class Iterator1 {
    hasNext(): boolean {
        return true;
    }

    next(): number {
        return -1
    }
}


class PeekingIterator {
    peakValue:number;
    used:boolean;
    iterator:Iterator1;
    constructor(iterator: Iterator1) {
        this.used = true;
        this.iterator = iterator;
    }

    peek(): number {
        if(this.used){
            this.used = false;
            this.peakValue = this.iterator.next();
        }
        return this.peakValue;
    }

    next(): number {
        if(this.used){
            return this.iterator.next()
        }
        this.used = true;
        return this.peakValue;
    }

    hasNext(): boolean {
        if(this.used){
            return this.iterator.hasNext()
        }
        return true
    }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */