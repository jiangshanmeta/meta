function numberOfRounds (startTime: string, finishTime: string): number {
    const startTS = (+startTime.slice(0, 2)) * 60 + (+startTime.slice(3));
    let endTS = (+finishTime.slice(0, 2)) * 60 + (+finishTime.slice(3));
    if (endTS < startTS) {
        endTS += 24 * 60;
    }
    const startRound = Math.ceil(startTS / 15);
    const endRound = Math.floor(endTS / 15);
    return endRound - startRound;
}
