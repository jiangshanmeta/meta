/**
 * @param {string} s
 * @return {string}
 */
// 0=>zero   z
// 1=>one    只剩1和9 o
// 2=>two    w
// 3=>three   排除2 8后t
// 4=>four    u
// 5=>five    排除4后 f
// 6=>six    x
// 7=>seven   排除5后v
// 8=>eight   g
// 9=>nine    1 9 e
var originalDigits = function (s) {
    const hashMap = {
        z: 0,
        o: 0,
        w: 0,
        t: 0,
        u: 0,
        f: 0,
        x: 0,
        v: 0,
        g: 0,
        e: 0,
    };

    for (let i = 0; i < s.length; i++) {
        hashMap[s[i]] !== undefined && hashMap[s[i]]++;
    }

    const arr = new Array(10);
    arr[0] = hashMap.z;
    hashMap.e -= hashMap.z;
    hashMap.o -= hashMap.z;

    arr[2] = hashMap.w;
    hashMap.t -= hashMap.w;
    hashMap.o -= hashMap.w;

    arr[4] = hashMap.u;
    hashMap.o -= hashMap.u;
    hashMap.f -= hashMap.u;

    arr[6] = hashMap.x;

    arr[8] = hashMap.g;
    hashMap.e -= hashMap.g;
    hashMap.t -= hashMap.g;

    arr[3] = hashMap.t;
    hashMap.e -= 2 * hashMap.t;

    arr[5] = hashMap.f;
    hashMap.v -= hashMap.f;
    hashMap.e -= hashMap.f;

    arr[7] = hashMap.v;
    hashMap.e -= 2 * hashMap.v;

    arr[1] = hashMap.o;
    hashMap.e -= hashMap.o;

    arr[9] = hashMap.e;

    return arr.reduce((str, count, num) => {
        if (count > 0) {
            str += (num + '').repeat(count);
        }
        return str;
    }, '');
};
