function repeatedSubstringPattern (s: string): boolean {
    return (s + s).indexOf(s, 1) !== s.length;
}
