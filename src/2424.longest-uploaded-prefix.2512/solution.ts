class LUPrefix {
    datas:boolean[]
    index = 1
    constructor (n: number) {
        this.datas = new Array<boolean>(n + 1).fill(false);
    }

    upload (video: number): void {
        this.datas[video] = true;
    }

    longest (): number {
        while (this.index < this.datas.length && this.datas[this.index]) {
            this.index++;
        }
        return this.index - 1;
    }
}

/**
 * Your LUPrefix object will be instantiated and called as such:
 * var obj = new LUPrefix(n)
 * obj.upload(video)
 * var param_2 = obj.longest()
 */
