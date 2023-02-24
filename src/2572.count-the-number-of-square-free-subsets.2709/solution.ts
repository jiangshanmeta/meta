function squareFreeSubsets (nums: number[]): number {
    const max = Math.max(...nums);
    const primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, ]);
    const banned = new Set([4, 8, 9, 12, 16, 18, 20, 24, 25, 27, 28, ]);
    const map = new Map<number, number[]>();
    // key和alue中的数字互斥
    map.set(6, [2, 3, ]);
    map.set(10, [2, 5, 6, ]);
    map.set(14, [2, 7, 6, 10, ]);
    map.set(15, [3, 5, 6, 10, ]);
    map.set(21, [3, 6, 7, 14, 15, ]);
    map.set(22, [2, 11, 6, 10, 14, ]);
    map.set(26, [2, 13, 6, 10, 14, 22, ]);
    map.set(30, [2, 3, 5, 6, 10, 14, 15, 21, 22, 26, ]);

    const counts = new Array(max + 1).fill(0);
    for (const num of nums) {
        counts[num]++;
    }

    const all:number[][] = [];
    const backTracking = (current:number[], index:number) => {
        if (index === counts.length) {
            if (current.length) {
                all.push(current.slice());
            }
            return;
        }

        if (banned.has(index) || counts[index] === 0) {
            backTracking(current, index + 1);
            return;
        }

        if (map.has(index)) {
            if (map.get(index)?.some((item) => current.includes(item))) {
                backTracking(current, index + 1);
            } else {
                current.push(index);
                backTracking(current, index + 1);
                current.pop();

                backTracking(current, index + 1);
            }
        } else {
            backTracking(current, index + 1);

            current.push(index);
            backTracking(current, index + 1);
            current.pop();
        }
    };

    backTracking([], 2);

    let result = 0;
    const mod = 10 ** 9 + 7;

    all.forEach((current) => {
        const c = current.reduce((acc, index) => {
            return acc * (counts[index]) % mod;
        }, 1);

        result = (result + c) % mod;
    });

    if (counts[1] > 0) {
        if (result > 0) {
            return (result * (2 ** counts[1]) % mod + (2 ** (counts[1])) - 1) % mod;
        } else {
            return ((2 ** (counts[1]))) % mod - 1;
        }
    }

    return result;
}
