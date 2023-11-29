function furthestDistanceFromOrigin (moves: string): number {
    let diff = 0;
    let _ = 0;
    for (let i = 0; i < moves.length; i++) {
        if (moves[i] === 'L') {
            diff++;
        } else if (moves[i] === 'R') {
            diff--;
        } else {
            _++;
        }
    }

    return Math.abs(diff) + _;
}
