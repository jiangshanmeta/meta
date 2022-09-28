function maximumTime (time: string): string {
    const list = time.split('');
    if (list[0] === '?') {
        if (list[1] === '?') {
            list[0] = '2';
            list[1] = '3';
        } else if (+list[1] > 3) {
            list[0] = '1';
        } else {
            list[0] = '2';
        }
    }
    if (list[1] === '?') {
        if (list[0] === '2') {
            list[1] = '3';
        } else {
            list[1] = '9';
        }
    }
    if (list[3] === '?') {
        list[3] = '5';
    }
    if (list[4] === '?') {
        list[4] = '9';
    }
    return list.join('');
}
