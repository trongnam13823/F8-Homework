import style from "./style.module.sass";
import { Box } from "@mui/material";
import CalculateIcon from "@mui/icons-material/Calculate";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import MultipleChoice from "./MultipleChoice";
import { QuestionI, QuestionTypeE } from "@/types/exam.types";
import { useEffect, useState } from "react";
import BookmarkIcon from "@mui/icons-material/Bookmark";

export default function ({ question, questionIndex }: { question: QuestionI; questionIndex: number }) {
    const [isReview, setIsReview] = useState(question.isReview);
    const onReview = () => {
        setIsReview(!isReview);
        question.isReview = !isReview;
    };

    useEffect(() => {
        setIsReview(question.isReview);
    }, [question]);

    return (
        <>
            <Box className={style.toolBar}>
                <Box
                    sx={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}
                    className={style.numberOfQuestion}
                >
                    {questionIndex + 1}
                </Box>
                <Box>
                    <Box>
                        <CalculateIcon style={{ color: "#1976D2" }} />
                        <span>Calculator</span>
                    </Box>
                    <Box onClick={onReview}>
                        {isReview ? (
                            <BookmarkIcon style={{ color: "#1976D2" }} />
                        ) : (
                            <BookmarkBorderIcon style={{ color: "#1976D2" }} />
                        )}

                        <span>Mark for review</span>
                    </Box>
                    <Box>ABC</Box>
                </Box>
            </Box>

            <Box>
                <p>{question.question}</p>
                {question.type === QuestionTypeE.MULTIPLE_CHOICE && <MultipleChoice question={question} />}
            </Box>
        </>
    );
}
