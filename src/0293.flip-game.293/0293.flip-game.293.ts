function generatePossibleNextMoves (currentState: string): string[] {
    const result:string[] = [];
    for (let i = 0; i < currentState.length - 1; i++) {
        if (currentState[i] === '+' && currentState[i + 1] === '+') {
            result.push(`${currentState.slice(0, i)}--${currentState.slice(i + 2)}`);
        }
    }
    return result;
}
