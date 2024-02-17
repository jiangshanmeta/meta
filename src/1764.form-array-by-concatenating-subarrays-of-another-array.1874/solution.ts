function canChoose(groups: number[][], nums: number[]): boolean {
    let index = 0;
    for (let i = 0; i < groups.length; i++) {
        while (index < nums.length && !isMatch(groups[i], nums, index)) {
            index++;
        }
        index += groups[i].length;
        if (index > nums.length) {
            return false;
        }
    }
    return true;
}

function isMatch(group: number[], nums: number[], index: number) {
    for (let i = 0; i < group.length; i++) {
        if (index === nums.length || group[i] !== nums[index++]) {
            return false;
        }
    }
    return true;
}

// KMP
function canChoose2(groups: number[][], nums: number[]): boolean {
    let startIndex = 0;
    for (let i = 0; i < groups.length; i++) {
        const positions = search(nums, groups[i]);

        if (positions.length === 0) {
            return false;
        }
        const index = positions.find((item) => item >= startIndex);
        if (index === undefined) {
            return false;
        }
        startIndex = index + groups[i].length
    }
    return true;
};

function getNext(pattern: number[]) {
    const next = new Array<number>(pattern.length).fill(0)

    let count = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (count > 0 && pattern[count] !== pattern[i]) {
            count = next[count - 1]
        }
        if (pattern[i] === pattern[count]) {
            count++;
        }
        next[i] = count;
    }
    return next
}

function search(nums: number[], pattern: number[]) {
    const next = getNext(pattern);

    const positions: number[] = [];
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
        while (count > 0 && nums[i] !== pattern[count]) {
            count = next[count - 1];
        }
        if (pattern[count] === nums[i]) {
            count++;
        }
        if (count === pattern.length) {
            positions.push(i - pattern.length + 1);
            count = next[count - 1];
        }
    }

    return positions;
}