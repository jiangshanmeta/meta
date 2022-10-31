function twoEditWords (queries: string[], dictionary: string[]): string[] {
    return queries.filter((query) => {
        return dictionary.some((word) => {
            let count = 0;
            for (let i = 0; i < query.length; i++) {
                if (query[i] !== word[i]) {
                    count++;
                    if (count === 3) {
                        break;
                    }
                }
            }
            return count < 3;
        });
    });
}
