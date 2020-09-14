/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// BFS
var minMutation = function (start, end, bank) {
    const bankMap = {};
    for (let i = 0; i < bank.length; i++) {
        bankMap[bank[i]] = true;
    }
    if (!bankMap[end]) {
        return -1;
    }
    const units = [
        'A', 'G', 'C', 'T', ];
    let sequence = [
        start, ];
    let count = 0;
    const usedMap = {
        [start]: true,
    };
    while (true) {
        if (sequence.length === 0) {
            return -1;
        }
        const nextSequence = [];
        for (let i = 0; i < sequence.length; i++) {
            const item = sequence[i];
            if (item === end) {
                return count;
            }
            for (let j = 0; j < 8; j++) {
                const prefix = item.substring(0, j);
                const suffix = item.substring(j + 1);
                for (let k = 0; k < 4; k++) {
                    if (units[k] === item[j]) {
                        continue;
                    }
                    const newItem = `${prefix}${units[k]}${suffix}`;

                    if (bankMap[newItem] && !usedMap[newItem]) {
                        usedMap[newItem] = true;
                        nextSequence.push(newItem);
                    }
                }
            }
        }

        sequence = nextSequence;
        count++;
    }
};
