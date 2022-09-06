function reformat (s: string): string {
    const letters:string[] = [];
    const nums:string[] = [];
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (code < 97) {
            nums.push(s[i]);
        } else {
            letters.push(s[i]);
        }
    }
    if (Math.abs(letters.length - nums.length) > 1) {
        return '';
    }

    if (letters.length < nums.length) {
        return fmt(nums, letters);
    } else {
        return fmt(letters, nums);
    }
}

function fmt (l1:string[], l2:string[]) {
    return l1.reduce<string[]>((list, item, index) => {
        list.push(item);
        if (index < l2.length) {
            list.push(l2[index]);
        }
        return list;
    }, []).join('');
}
