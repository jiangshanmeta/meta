function countOperationsToEmptyArray (nums: number[]): number {
    const sorted = [...nums, ].sort((a, b) => a - b);
    const map = new Map<number, number>();
    for (let i = 0; i < sorted.length; i++) {
        map.set(sorted[i], i);
    }
    // 处理成相对大小
    nums = nums.map((num) => map.get(num)!);
    const map2 = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        map2.set(nums[i], i);
    }
    const visited = new Array<boolean>(nums.length);
    let result = 0;
    // 每一轮处理一组 increase by 1 的 最长增长子序列
    // 这一轮操作数为 nums.length-子序列最小值的排名(即前面有几个数 之前已经被移除了)
    for (let i = nums.length - 1; i > -1; i--) {
        if (visited[i]) {
            continue;
        }
        visited[i] = true;
        let rank = i;
        let index = map2.get(rank)!;
        while (rank > 0 && map2.get(rank - 1)! < index) {
            rank--;
            index = map2.get(rank)!;
            visited[rank] = true;
        }
        result += nums.length - rank;
    }

    return result;
}
