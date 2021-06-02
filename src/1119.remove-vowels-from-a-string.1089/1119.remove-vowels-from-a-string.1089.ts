function removeVowels (s: string): string {
    const set = new Set('aeiou');
    return s.split('').filter((letter) => !set.has(letter)).join('');
}
