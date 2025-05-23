export function getRandomQuestions(questions, milestone) {
    const questionsAtLevel = questions[milestone - 1];
    const randomIndex = Math.floor(Math.random() * questionsAtLevel.length);
    return structuredClone(questionsAtLevel[randomIndex]);
}

export function use5050(question) {
    const wrong = question.options.filter(o => o.id !== question.answer);

    const a = wrong.splice(Math.floor(Math.random() * wrong.length), 1)[0];
    const b = wrong[Math.floor(Math.random() * wrong.length)];

    for (const o of question.options)
        if (o.id === a.id || o.id === b.id) o.hidden = true;

    return question;
}

export function useAudiencePoll(question) {
    const correct = question.answer;
    let percentages = { A: 0, B: 0, C: 0, D: 0 };

    percentages[correct] = Math.floor(Math.random() * 21) + 40; // 40–60%
    let remainingPercent = 100 - percentages[correct];

    const otherOptions = question.options
        .map(opt => opt.id)
        .filter(id => id !== correct);

    // Phân phối phần trăm còn lại cho các đáp án sai
    for (let i = 0; i < otherOptions.length; i++) {
        if (i === otherOptions.length - 1) {
            percentages[otherOptions[i]] = remainingPercent;
        } else {
            const rand = Math.floor(Math.random() * (remainingPercent + 1));
            percentages[otherOptions[i]] = rand;
            remainingPercent -= rand;
        }
    }

    // Trả về options mới, mỗi đáp án thêm `percent`
    return question.options.map(opt => ({
        ...opt,
        percent: percentages[opt.id]
    }));
}

export function usePhoneFriend(question) {
    const isCorrect = Math.random() < 0.8;
    const suggestionId = isCorrect
        ? question.answer
        : question.options.filter(opt => opt.id !== question.answer && !opt?.hidden)[Math.floor(Math.random() * 3)].id;

    return question.options.map(opt => {
        if (opt.id === suggestionId) {
            return { ...opt, suggested: true };
        }
        return opt;
    });
}

export function useExpertAdvice(question) {
    const isCorrect = Math.random() < 0.6;
    const suggestionId = isCorrect
        ? question.answer
        : question.options.filter(opt => opt.id !== question.answer && !opt?.hidden)[Math.floor(Math.random() * 3)].id;

    return question.options.map(opt => {
        if (opt.id === suggestionId) {
            return { ...opt, suggested: true };
        }
        return opt;
    });
}