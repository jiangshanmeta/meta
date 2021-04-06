function maximum69Number (num: number): number {
    const sList = String(num).split('');
    for (let i = 0; i < sList.length; i++) {
        if (sList[i] === '6') {
            sList[i] = '9';
            break;
        }
    }
    return +sList.join('');
}
