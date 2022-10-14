function findArray (pref: number[]): number[] {
    const result = new Array<number>(pref.length);
    result[0] = pref[0];
    for (let i = 1; i < result.length; i++) {
        result[i] = pref[i - 1] ^ pref[i];
    }
    return result;
}
