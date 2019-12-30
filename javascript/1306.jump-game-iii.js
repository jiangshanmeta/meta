/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function(arr, start) {
    // 相当于是做了一次DFS
    const visited = new Array(arr.length).fill(false);
    visited[start] = true;
    const stack = [start];
    while(stack.length){
        const node = stack.pop();
        if(arr[node] === 0){
            return true;
        }
        if(node-arr[node]>-1 && !visited[node-arr[node]]){
            stack.push(node-arr[node]);
            visited[node-arr[node]] = true;
        }
        if(node+arr[node]<arr.length && !visited[node+arr[node]]){
            stack.push(node+arr[node]);
            visited[node+arr[node]] = true;
        }
    }

    return false;
};