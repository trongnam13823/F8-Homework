import { QuestionI } from "@/types/exam.types";
import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { ChangeEvent, useEffect, useState } from "react";

export default function ({ question }: { question: QuestionI }) {
    const [answer, setAnswer] = useState(question?.answer);
    const onChooseAnswer = (e: ChangeEvent<HTMLInputElement>) => {
        question.answer = e.target.value;
        setAnswer(e.target.value);
    };

    useEffect(() => {
        setAnswer(question?.answer);
    }, [question]);

    return (
        <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            value={answer ?? ""}
            onChange={onChooseAnswer}
        >
            <FormControlLabel value={question.optionA} control={<Radio />} label={question.optionA} />
            <FormControlLabel value={question.optionB} control={<Radio />} label={question.optionB} />
            <FormControlLabel value={question.optionC} control={<Radio />} label={question.optionC} />
            <FormControlLabel value={question.optionD} control={<Radio />} label={question.optionD} />
        </RadioGroup>
    );
}
