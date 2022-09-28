/**
 * @param {number[]} pid
 * @param {number[]} ppid
 * @param {number} kill
 * @return {number[]}
 */
var killProcess = function (pid, ppid, kill) {
    const p2c = {};
    for (let i = 0; i < ppid.length; i++) {
        if (!p2c[ppid[i]]) {
            p2c[ppid[i]] = [];
        }
        p2c[ppid[i]].push(pid[i]);
    }
    const result = [];
    const stack = [kill, ];
    while (stack.length) {
        const node = stack.pop();
        result.push(node);
        const edges = p2c[node];
        if (edges) {
            stack.push(...edges);
        }
    }
    return result;
};
