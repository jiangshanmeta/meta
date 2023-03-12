function countCollisions (directions: string): number {
    let result = 0;
    let lastIsS = directions[0] === 'S';
    let lastRCount = directions[0] === 'R' ? 1 : 0;
    for (let i = 1; i < directions.length; i++) {
        if (directions[i] === 'S') {
            result += lastRCount;
            lastRCount = 0;
            lastIsS = true;
        } else if (directions[i] === 'L') {
            if (lastRCount) {
                result += lastRCount + 1;
                lastIsS = true;
                lastRCount = 0;
            } else if (lastIsS) {
                result++;
                lastIsS = true;
            } else {
                lastIsS = false;
            }
        } else {
            lastRCount++;
            lastIsS = false;
        }
    }
    return result;
}
