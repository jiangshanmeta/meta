class RLEIterator {
    A:number[];
    index:number;
    constructor(A: number[]) {
        this.A = A;
        this.index = 0;
    }

    next(n: number): number {
        while(n>0 && this.index<this.A.length){
            if(this.A[this.index]>=n){
                this.A[this.index] -=n;
                return this.A[this.index+1];
            }else{
                n -= this.A[this.index];
                this.index += 2;
            }
        }
        return -1;
    }
}

/**
 * Your RLEIterator object will be instantiated and called as such:
 * var obj = new RLEIterator(A)
 * var param_1 = obj.next(n)
 */