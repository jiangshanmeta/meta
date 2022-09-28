/**
 * @param {number[][]} orders
 * @return {number}
 */
var getNumberOfBacklogOrders = function (orders) {
    //   小顶堆
    const sellHeap = [];
    //  大顶堆
    const buyHeap = [];
    for (let i = 0; i < orders.length; i++) {
        let [pricei, amounti, orderTypei, ] = orders[i];
        if (orderTypei === 0) {
            // buy
            while (amounti > 0 && sellHeap.length && sellHeap[0][0] <= pricei) {
                if (sellHeap[0][1] > amounti) {
                    sellHeap[0][1] -= amounti;
                    amounti = 0;
                } else {
                    amounti -= sellHeap[0][1];
                    sellHeap[0] = sellHeap[sellHeap.length - 1];
                    sellHeap.pop();
                    let index = 0;
                    while (2 * index + 1 < sellHeap.length) {
                        let child = 2 * index + 1;
                        if (child + 1 < sellHeap.length && sellHeap[child + 1][0] < sellHeap[child][0]) {
                            child++;
                        }
                        if (sellHeap[child][0] < sellHeap[index][0]) {
                            swap(sellHeap, index, child);
                            index = child;
                        } else {
                            break;
                        }
                    }
                }
            }
            if (amounti > 0) {
                const node = [pricei, amounti, ];
                buyHeap.push(node);
                let index = buyHeap.length - 1;
                while (index > 0) {
                    const parent = ((index + 1) >> 1) - 1;
                    if (buyHeap[parent][0] < buyHeap[index][0]) {
                        swap(buyHeap, index, parent);
                        index = parent;
                    } else {
                        break;
                    }
                }
            }
        } else {
            // sell
            while (amounti > 0 && buyHeap.length && buyHeap[0][0] >= pricei) {
                if (buyHeap[0][1] > amounti) {
                    buyHeap[0][1] -= amounti;
                    amounti = 0;
                } else {
                    amounti -= buyHeap[0][1];
                    buyHeap[0] = buyHeap[buyHeap.length - 1];
                    buyHeap.pop();
                    let index = 0;
                    while (2 * index + 1 < buyHeap.length) {
                        let child = 2 * index + 1;
                        if (child + 1 < buyHeap.length && buyHeap[child + 1][0] > buyHeap[child][0]) {
                            child++;
                        }
                        if (buyHeap[index][0] < buyHeap[child][0]) {
                            swap(buyHeap, index, child);
                            index = child;
                        } else {
                            break;
                        }
                    }
                }
            }

            if (amounti) {
                const node = [pricei, amounti, ];
                sellHeap.push(node);
                let index = sellHeap.length - 1;
                while (index > 0) {
                    const parent = ((index + 1) >> 1) - 1;
                    if (sellHeap[parent][0] > sellHeap[index][0]) {
                        swap(sellHeap, index, parent);
                        index = parent;
                    } else {
                        break;
                    }
                }
            }
        }
    }

    let result = 0;
    const mod = 10 ** 9 + 7;
    for (let i = 0; i < buyHeap.length; i++) {
        result = (result + buyHeap[i][1]) % mod;
    }
    for (let i = 0; i < sellHeap.length; i++) {
        result = (result + sellHeap[i][1]) % mod;
    }
    return result;
};

function swap (array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}
