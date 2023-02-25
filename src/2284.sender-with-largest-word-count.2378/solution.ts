function largestWordCount (messages: string[], senders: string[]): string {
    const map = new Map<string, number>();
    let result = '';
    let maxCount = 0;
    for (let i = 0; i < messages.length; i++) {
        let count = map.has(senders[i]) ? map.get(senders[i])! : 0;
        count += messages[i].split(' ').length;
        if (count > maxCount) {
            result = senders[i];
            maxCount = count;
        } else if (count === maxCount && senders[i] > result) {
            result = senders[i];
        }
        map.set(senders[i], count);
    }
    return result;
}
