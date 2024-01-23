function minimumCost (nums: number[], k: number, dist: number): number {
    dist++;
    k--;
    let sum = 0;
    const initial = nums.slice(1, 1 + dist).sort((a, b) => a - b);
    for (let i = 0; i < k; i++) {
        sum += initial[i];
    }
    const maxHeap = initial.slice(0, k);
    const minHeap = initial.slice(k);
    const swap = (heap:number[], i:number, j:number) => {
        const tmp = heap[i];
        heap[i] = heap[j];
        heap[j] = tmp;
    };
    const minHeapDown = (parent:number) => {
        while (2 * parent + 1 < minHeap.length) {
            let child = 2 * parent + 1;
            if (child + 1 < minHeap.length && minHeap[child + 1] < minHeap[child]) {
                child++;
            }
            if (minHeap[parent] > minHeap[child]) {
                swap(minHeap, parent, child);
                parent = child;
            } else {
                break;
            }
        }
    };
    const maxHeapDown = (parent:number) => {
        while (2 * parent + 1 < maxHeap.length) {
            let child = 2 * parent + 1;
            if (child + 1 < maxHeap.length && maxHeap[child + 1] > maxHeap[child]) {
                child++;
            }
            if (maxHeap[parent] < maxHeap[child]) {
                swap(maxHeap, parent, child);
                parent = child;
            } else {
                break;
            }
        }
    };

    const minHeapUp = (child:number) => {
        while (child > 0) {
            const parent = (child - 1) >> 1;
            if (minHeap[parent] > minHeap[child]) {
                swap(minHeap, parent, child);
                child = parent;
            } else {
                break;
            }
        }
    };
    const maxHeapUp = (child:number) => {
        while (child > 0) {
            const parent = (child - 1) >> 1;
            if (maxHeap[parent] < maxHeap[child]) {
                swap(maxHeap, parent, child);
                child = parent;
            } else {
                break;
            }
        }
    };

    if (maxHeap.length > 1) {
        for (let i = (maxHeap.length - 2) >> 1; i > -1; i--) {
            maxHeapDown(i);
        }
    }

    if (minHeap.length > 1) {
        for (let i = (minHeap.length - 2) >> 1; i > -1; i--) {
            minHeapDown(i);
        }
    }

    let res = sum;

    const minHeapMap = new Map<number, number>();
    const clearMinHeap = () => {
        while (minHeap.length && minHeapMap.has(minHeap[0]) && minHeapMap.get(minHeap[0])! > 0) {
            minHeapMap.set(minHeap[0], minHeapMap.get(minHeap[0])! - 1);
            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            minHeapDown(0);
        }
    };

    const maxHeapMap = new Map<number, number>();
    const clearMaxHeap = () => {
        while (maxHeap.length && maxHeapMap.has(maxHeap[0]) && maxHeapMap.get(maxHeap[0])! > 0) {
            maxHeapMap.set(maxHeap[0], maxHeapMap.get(maxHeap[0])! - 1);
            maxHeap[0] = maxHeap[maxHeap.length - 1];
            maxHeap.pop();
            maxHeapDown(0);
        }
    };

    for (let i = dist; i < nums.length; i++) {
        res = Math.min(res, sum);
        if (i === nums.length - 1) {
            continue;
        }

        const needRemove = nums[i - dist + 1];
        if (minHeap.length === 0) {
            sum -= needRemove;
            sum += nums[i + 1];
            continue;
        }
        const kMax = maxHeap[0];
        const rMin = minHeap[0];
        if (needRemove < kMax) {
            sum -= needRemove;
            maxHeapMap.set(needRemove, maxHeapMap.has(needRemove) ? maxHeapMap.get(needRemove)! + 1 : 1);
        } else if (needRemove === kMax) {
            sum -= needRemove;
            maxHeap[0] = maxHeap[maxHeap.length - 1];
            maxHeap.pop();
            maxHeapDown(0);
            clearMaxHeap();
        } else if (needRemove === rMin) {
            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            minHeapDown(0);
            clearMinHeap();
        } else if (needRemove > rMin) {
            minHeapMap.set(needRemove, minHeapMap.has(needRemove) ? minHeapMap.get(needRemove)! + 1 : 1);
        }

        minHeap.push(nums[i + 1]);
        minHeapUp(minHeap.length - 1);
        clearMinHeap();

        if (needRemove <= kMax) {
            sum += minHeap[0];
            maxHeap.push(minHeap[0]);
            if (maxHeap.length > 1) {
                maxHeapUp(maxHeap.length - 1);
                clearMaxHeap();
            }

            minHeap[0] = minHeap[minHeap.length - 1];
            minHeap.pop();
            minHeapDown(0);
            clearMinHeap();
        }
        while (maxHeap[0] > minHeap[0]) {
            sum = sum - maxHeap[0] + minHeap[0];
            const tmp = maxHeap[0];
            maxHeap[0] = minHeap[0];
            minHeap[0] = tmp;
            maxHeapDown(0);
            minHeapDown(0);
            clearMaxHeap();
            clearMinHeap();
        }
    }
    return res + nums[0];
}
