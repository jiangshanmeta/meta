function getEncryptedString (s: string, k: number): string {
    return s.split('').map((c, i) => s[(i + k) % s.length]).join('');
}
