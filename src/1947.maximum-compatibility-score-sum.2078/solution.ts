function maxCompatibilitySum (students: number[][], mentors: number[][]): number {
    const M = students.length;
    const N = students[0].length;
    const toBinary = (nums:number[]) => {
        let result = 0;
        for (let i = 0; i < nums.length; i++) {
            result = result * 2 + nums[i];
        }
        return result;
    };
    const studentsBinary = students.map(toBinary);
    const mentorBinary = mentors.map(toBinary);
    let result = 0;
    const used:boolean[] = new Array(M).fill(false);
    const count1 = (num:number) => {
        let result = 0;
        while (num) {
            result++;
            num = num & (num - 1);
        }
        return result;
    };
    const backTracking = (i:number, total:number) => {
        if (i === M) {
            result = Math.max(result, total);
            return;
        }
        for (let j = 0; j < M; j++) {
            if (used[j]) {
                continue;
            }
            used[j] = true;
            backTracking(i + 1, total + N - count1(studentsBinary[i] ^ mentorBinary[j]));
            used[j] = false;
        }
    };
    backTracking(0, 0);
    return result;
}
