class SparseVector {
    datas:number[] = [];
    indexs:number[] = [];
    constructor (nums: number[]) {
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] === 0) {
                continue;
            }
            this.indexs.push(i);
            this.datas.push(nums[i]);
        }
    }

    // Return the dotProduct of two sparse vectors
    dotProduct (vec: SparseVector): number {
        const datas1 = this.datas;
        const indexs1 = this.indexs;
        const datas2 = vec.datas;
        const indexs2 = vec.indexs;
        let i = 0;
        let j = 0;
        let result = 0;
        while (i < indexs1.length && j < indexs2.length) {
            if (indexs1[i] < indexs2[j]) {
                i++;
            } else if (indexs1[i] > indexs2[j]) {
                j++;
            } else {
                result += datas1[i++] * datas2[j++];
            }
        }
        return result;
    }
}

/**
 * Your SparseVector object will be instantiated and called as such:
 * var v1 = new SparseVector(nums1)
 * var v2 = new SparseVector(nums1)
 * var ans = v1.dotProduct(v2)
 */
