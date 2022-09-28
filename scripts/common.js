exports.genFolderName = (question) => {
    return `${question.index}.${question.title_slug}.${question.id}`;
};
