class Trie {
    root:Record<string, any> = {}
    constructor () {

    }

    insert (word: string): void {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!root[word[i]]) {
                root[word[i]] = {};
            }
            root = root[word[i]];
        }
        root._end = true;
    }

    search (word: string): boolean {
        let root = this.root;
        for (let i = 0; i < word.length; i++) {
            if (!root[word[i]]) {
                return false;
            }
            root = root[word[i]];
        }
        return !!root._end;
    }

    startsWith (prefix: string): boolean {
        let root = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (!root[prefix[i]]) {
                return false;
            }
            root = root[prefix[i]];
        }
        return true;
    }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
