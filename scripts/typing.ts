export interface Problem {
    difficulty: {
        level: number;
    };
    stat: {
        frontend_question_id: string;
        question__title: string;
        question__title_slug: string;
        question_id: number;
    };
    status: null | string;
}

export interface ProblemResponse {
    stat_status_pairs: Problem[];
    num_total: number;
}

export interface Question {
    id: number;
    index: string;
    title: string;
    title_slug: string;
    difficulty: number;
}
