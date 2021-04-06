
const map = new Map([
    ['2', ['a', 'b', 'c', ], ],
    ['3', ['d', 'e', 'f', ], ],
    ['4', ['g', 'h', 'i', ], ],
    ['5', ['j', 'k', 'l', ], ],
    ['6', ['m', 'n', 'o', ], ],
    ['7', ['p', 'q', 'r', 's', ], ],
    ['8', ['t', 'u', 'v', ], ],
    ['9', ['w', 'x', 'y', 'z', ], ],
]);
function letterCombinations (digits: string): string[] {
    if (digits.length === 0) {
        return [];
    }
    const result:string[] = [];
    backTracking(
        digits,
        0,
        [] as string[],
        result
    );
    return result;
}

function backTracking (digits:string, index:number, sequence:string[], result:string[]) {
    if (index === digits.length) {
        result.push(sequence.join(''));
        return;
    }
    const list = <string[]>map.get(digits[index++]);
    for (let i = 0; i < list.length; i++) {
        sequence.push(list[i]);
        backTracking(digits, index, sequence, result);
        sequence.pop();
    }
}
