/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function (employees, id) {
    const map = new Map();
    for (let i = 0; i < employees.length; i++) {
        map.set(employees[i].id, employees[i]);
    }
    const stack = [id, ];
    let result = 0;
    while (stack.length) {
        const node = map.get(stack.pop());
        result += node.importance;
        stack.push(...node.subordinates);
    }
    return result;
};
