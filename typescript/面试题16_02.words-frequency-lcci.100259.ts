class WordsFrequency {
    private map:Map<string,number>;
    constructor(book: string[]) {
        this.map = new Map<string,number>();
        for(let str of book){
            if(this.map.has(str)){
                this.map.set(str,<number>this.map.get(str)+1)
            }else{
                this.map.set(str,1);
            }
        }
    }

    get(word: string): number {
        if(this.map.has(word)){
            return <number>this.map.get(word)
        }else{
            return 0;
        }
    }
}

/**
 * Your WordsFrequency object will be instantiated and called as such:
 * var obj = new WordsFrequency(book)
 * var param_1 = obj.get(word)
 */