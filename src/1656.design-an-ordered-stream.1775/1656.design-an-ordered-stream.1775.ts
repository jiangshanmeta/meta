class OrderedStream {
    private sequence:string[];
    private ptr:number;
    constructor(n: number) {
        this.sequence = new Array(n+1);
        this.ptr = 1;
    }

    insert(id: number, value: string): string[] {
        this.sequence[id] = value;
        if(id !== this.ptr){
            return [];
        }
        const result:string[] = [];

        while(this.ptr<this.sequence.length && this.sequence[this.ptr] !== undefined){
            result.push(this.sequence[this.ptr++]);
        }

        return result;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(id,value)
 */