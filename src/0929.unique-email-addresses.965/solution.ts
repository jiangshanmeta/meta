function numUniqueEmails (emails: string[]): number {
    const set = new Set<string>();
    for (const email of emails) {
        let [name, domain, ] = email.split('@');
        const index = name.indexOf('+');
        if (index !== -1) {
            name = name.slice(0, index);
        }
        name = name.replace(/\./g, '');
        set.add(`${name}@${domain}`);
    }
    return set.size;
}
