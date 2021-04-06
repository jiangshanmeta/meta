function isFlipedString (s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false;
    }
    return (s1 + s1).includes(s2);
}
