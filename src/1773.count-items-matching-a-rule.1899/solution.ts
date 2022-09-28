function countMatches (items: string[][], ruleKey: string, ruleValue: string): number {
    let result = 0;
    for (const [type, color, name, ] of items) {
        switch (ruleKey) {
        case 'type':
            if (type === ruleValue) {
                result++;
            }
            break;
        case 'color':
            if (color === ruleValue) {
                result++;
            }
            break;
        case 'name':
            if (name === ruleValue) {
                result++;
            }
            break;
        }
    }
    return result;
}
