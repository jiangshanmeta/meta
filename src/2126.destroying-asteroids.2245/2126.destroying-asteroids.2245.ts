function asteroidsDestroyed (mass: number, asteroids: number[]): boolean {
    asteroids.sort((a, b) => a - b);
    for (const item of asteroids) {
        if (mass < item) {
            return false;
        }
        mass += item;
    }
    return true;
}
