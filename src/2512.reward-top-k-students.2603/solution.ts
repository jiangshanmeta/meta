function topStudents (positive_feedback: string[], negative_feedback: string[], report: string[], student_id: number[], k: number): number[] {
    const posSet = new Set(positive_feedback);
    const negSet = new Set(negative_feedback);

    return report.map((item, index) => {
        const comments = item.split(' ');
        let score = 0;
        for (const comment of comments) {
            if (posSet.has(comment)) {
                score += 3;
            } else if (negSet.has(comment)) {
                score--;
            }
        }

        return {
            score,
            id: student_id[index],
        };
    }).sort((a, b) => {
        if (a.score !== b.score) {
            return b.score - a.score;
        }
        return a.id - b.id;
    }).slice(0, k).map(item => item.id);
}
