function truncateSentence (s: string, k: number): string {
    return s.split(' ').slice(0, k).join(' ');
}
