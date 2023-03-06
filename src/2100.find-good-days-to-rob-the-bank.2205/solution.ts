function goodDaysToRobBank (security: number[], time: number): number[] {
    if (time === 0) {
        return security.map((_, index) => index);
    }
    const decrease = new Array<number>(security.length);
    decrease[0] = 1;
    for (let i = 1; i < security.length; i++) {
        if (security[i] > security[i - 1]) {
            decrease[i] = 1;
        } else {
            decrease[i] = decrease[i - 1] + 1;
        }
    }
    const increase = new Array<number>(security.length);
    increase[increase.length - 1] = 1;
    for (let i = security.length - 2; i > -1; i--) {
        if (security[i] > security[i + 1]) {
            increase[i] = 1;
        } else {
            increase[i] = increase[i + 1] + 1;
        }
    }
    const result:number[] = [];
    for (let i = time; i < security.length - time; i++) {
        if (decrease[i] >= time + 1 && increase[i] >= time + 1) {
            result.push(i);
        }
    }
    return result;
}
