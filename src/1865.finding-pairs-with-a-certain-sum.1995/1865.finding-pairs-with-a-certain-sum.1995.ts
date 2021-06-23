class FindSumPairs {
    map:{[x:number]:number}
    constructor (private nums1: number[], private nums2: number[]) {
        // 因为题目规定nums1 元素数量远小于nums2 所以count的时候尽可能迭代nums1
        // 所以把nums2转换为map形式
        this.map = this.nums2.reduce((obj, item) => {
            obj[item] = (obj[item] || 0) + 1;
            return obj;
        }, Object.create(null));
    }

    add (index: number, val: number): void {
        this.map[this.nums2[index]]--;
        this.nums2[index] += val;
        const num = this.nums2[index];
        this.map[num] = (this.map[num] || 0) + 1;
    }

    count (tot: number): number {
        let result = 0;
        for (const item of this.nums1) {
            if (this.map[tot - item]) {
                result += this.map[tot - item];
            }
        }
        return result;
    }
}

/**
 * Your FindSumPairs object will be instantiated and called as such:
 * var obj = new FindSumPairs(nums1, nums2)
 * obj.add(index,val)
 * var param_2 = obj.count(tot)
 */
