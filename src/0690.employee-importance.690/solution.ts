class Employee {
    id: number
    importance: number
    subordinates: number[]
    constructor (id: number, importance: number, subordinates: number[]) {
        this.id = (id === undefined) ? 0 : id;
        this.importance = (importance === undefined) ? 0 : importance;
        this.subordinates = (subordinates === undefined) ? [] : subordinates;
    }
}

function GetImportance (employees: Employee[], id: number): number {
    const map = new Map<number, Employee>();
    for (let i = 0; i < employees.length; i++) {
        map.set(employees[i].id, employees[i]);
    }
    const stack = [id, ];
    let result = 0;
    while (stack.length) {
        const id = stack.pop()!;
        const node = map.get(id)!;
        result += node.importance;
        for (let i = 0; i < node.subordinates.length; i++) {
            stack.push(node.subordinates[i]);
        }
    }
    return result;
}
