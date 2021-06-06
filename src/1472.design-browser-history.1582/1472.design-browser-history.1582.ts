class BrowserHistory {
    seq:string[];
    index=0;
    constructor (homepage: string) {
        this.seq = [homepage, ];
    }

    visit (url: string): void {
        this.seq.length = this.index + 1;
        this.seq[++this.index] = url;
    }

    back (steps: number): string {
        steps = Math.min(steps, this.index);
        this.index -= steps;
        return this.seq[this.index];
    }

    forward (steps: number): string {
        steps = Math.min(steps, this.seq.length - 1 - this.index);
        this.index += steps;
        return this.seq[this.index];
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
