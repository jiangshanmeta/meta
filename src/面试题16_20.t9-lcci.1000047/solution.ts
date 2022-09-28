function getValidT9Words (num: string, words: string[]): string[] {
    const map = new Map([
        ['a', '2', ],
        ['b', '2', ],
        ['c', '2', ],
        ['d', '3', ],
        ['e', '3', ],
        ['f', '3', ],
        ['g', '4', ],
        ['h', '4', ],
        ['i', '4', ],
        ['j', '5', ],
        ['k', '5', ],
        ['l', '5', ],
        ['m', '6', ],
        ['n', '6', ],
        ['o', '6', ],
        ['p', '7', ],
        ['q', '7', ],
        ['r', '7', ],
        ['s', '7', ],
        ['t', '8', ],
        ['u', '8', ],
        ['v', '8', ],
        ['w', '9', ],
        ['x', '9', ],
        ['y', '9', ],
        ['z', '9', ],
    ]);

    return words.filter((word) => {
        if (word.length !== num.length) {
            return false;
        }
        for (let i = 0; i < word.length; i++) {
            if (map.get(word[i]) !== num[i]) {
                return false;
            }
        }
        return true;
    });
}
