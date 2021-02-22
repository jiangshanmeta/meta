function countStudents(students: number[], sandwiches: number[]): number {
    const counts = [0,0]
    for(let i=0;i<students.length;i++){
        counts[students[i]]++;
    }
    for(let i=0;i<sandwiches.length;i++){
        if(counts[sandwiches[i]] === 0){
            break;
        }
        counts[sandwiches[i]]--;
    }
    return counts[0]+counts[1];
};