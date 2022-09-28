/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
    const canEnter = new Array(rooms.length).fill(false);
    canEnter[0] = true;
    // BFS DFS也一样
    const queue = [
        0, ];

    while (queue.length) {
        const room = rooms[queue.shift()];
        for (let i = 0; i < room.length; i++) {
            const key = room[i];
            if (!canEnter[key]) {
                canEnter[key] = true;
                queue.push(key);
            }
        }
    }

    return canEnter.every((item) => item);
};
