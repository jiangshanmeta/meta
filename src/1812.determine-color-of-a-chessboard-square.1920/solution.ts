function squareIsWhite (coordinates: string): boolean {
    const code1 = (coordinates.charCodeAt(0) - 97) & 1;
    const code2 = (+coordinates[1]) & 1;

    return (code1 ^ code2) === 0;
}
