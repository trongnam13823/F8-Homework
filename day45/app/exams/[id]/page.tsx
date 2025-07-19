"use client";

import { Box, Grid } from "@mui/material";
import style from "./style.module.sass";
import QuestionDescription from "./Description";
import QuestionSelection from "./Selection";
import HeaderBar from "./Header";
import FooterBar from "./Footer";
import { useParams } from "next/navigation";
import api from "@/plugins/api";
import { useEffect, useMemo, useState } from "react";
import { ExamI, QuestionTypeE } from "@/types/exam.types";

const defaultExam = {
    id: undefined,
    title: "",
    description: "",
    details: [
        {
            id: undefined,
            section: 0,
            module: 0,
            question: {
                id: undefined,
                code: "",
                description: "",
                question: "",
                type: QuestionTypeE.MULTIPLE_CHOICE,
                optionA: "",
                optionB: "",
                optionC: "",
                optionD: "",
            },
        },
    ],
};

export default function () {
    const { id } = useParams();
    const [exam, setExam] = useState<ExamI>(defaultExam);
    const [questionIndex, setQuestionIndex] = useState(0);

    const question = useMemo(() => {
        return exam.details[questionIndex].question;
    }, [exam, questionIndex]);

    const detail = useMemo(() => {
        return exam.details[questionIndex];
    }, [exam, questionIndex]);

    const details = useMemo(() => {
        return exam.details;
    }, [exam, questionIndex]);

    const getExam = async () => {
        try {
            const { data } = await api.get(`/exams/${id}`);
            setExam(data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        getExam();
    }, []);

    return (
        <>
            <HeaderBar detail={detail} />
            <Box sx={{ margin: "0 5%" }} className={style.main}>
                <Grid container>
                    <Grid size={6} sx={{ paddingTop: "10px" }}>
                        <QuestionDescription desc={question.description} />
                    </Grid>
                    <Grid size={6}>
                        <QuestionSelection question={question} questionIndex={questionIndex} />
                    </Grid>
                </Grid>
            </Box>
            <FooterBar details={details} setQuestionIndex={setQuestionIndex} />
            {/* <ToLocal /> */}
        </>
    );
}
