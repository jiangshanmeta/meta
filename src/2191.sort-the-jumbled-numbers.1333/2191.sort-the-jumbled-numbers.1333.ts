function sortJumbled (mapping: number[], nums: number[]): number[] {
    return nums.map((item, index) => {
        return {
            item,
            index,
            mapped: +`${item}`.split('').map(i => mapping[i]).join(''),
        };
    }).sort((a, b) => {
        if (a.mapped !== b.mapped) {
            return a.mapped - b.mapped;
        }
        return a.index - b.index;
    }).map(item => item.item);
}
