/**
 * @param {number} N
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (N, edges) {
    const used = new Array(N).fill(false);
    used[0] = true;
    const map = new Array(N);
    const map1 = new Array(N);
    for (let i = 0; i < N; i++) {
        map[i] = [];
        map1[i] = [];
    }
    for (let i = 0; i < edges.length; i++) {
        map1[edges[i][0]].push(edges[i][1]);
        map1[edges[i][1]].push(edges[i][0]);
    }

    const stack = [
        0, ];
    while (stack.length) {
        const index = stack.pop();
        for (let i = 0; i < map1[index].length; i++) {
            if (!used[map1[index][i]]) {
                used[map1[index][i]] = true;
                map[index].push(map1[index][i]);
                stack.push(map1[index][i]);
            }
        }
    }

    const result = new Array(N).fill(0);

    function helper2 (index, count, dis) {
        dis += count;
        result[index] += dis;
        for (let i = 0; i < map[index].length; i++) {
            helper2(map[index][i], count, dis);
        }
    }

    function helper (index) {
        const list = map[index].map(helper);
        let dis = 0;
        let count = 0;
        for (let i = 0; i < list.length; i++) {
            count += list[i].count;
            dis += (list[i].count + list[i].dis);
        }
        result[index] += dis;

        for (let i = 0; i < map[index].length; i++) {
            helper2(map[index][i], count - list[i].count + 1, dis - list[i].count - list[i].dis);
        }

        return {
            count: count + 1,
            dis,
        };
    }

    helper(0);
    return result;
};
