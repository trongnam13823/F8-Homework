"use client";

import style from "./style.module.sass";
import { Box, Button, Menu } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ReviewQuestions from "./ReviewQuestions";
import { ExamDetailI } from "@/types/exam.types";

export default function ({
    details,
    setQuestionIndex,
}: {
    details: ExamDetailI[];
    setQuestionIndex: Dispatch<SetStateAction<number>>;
}) {
    console.log(details);

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const onOpenMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };

    const open = Boolean(anchorEl);

    const onBack = () => {
        setQuestionIndex((prev) => (prev === 0 ? 0 : prev - 1));
    };

    const onNext = () => {
        setQuestionIndex((prev) => (prev === details.length - 1 ? details.length - 1 : prev + 1));
    };

    const onChoice = (index: number) => {
        setQuestionIndex(index);
    };

    return (
        <Box className={style.footer}>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={() => setAnchorEl(null)}
                PaperProps={{
                    sx: {
                        mt: -1, // margin top negative (about 8px unit) to push up
                    },
                }}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center",
                }}
                transformOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                }}
            >
                <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }} className={style.memu}>
                    <ReviewQuestions details={details} onChoice={onChoice} />
                    <Box sx={{ margin: "0 auto" }}>
                        <Button variant={"outlined"}>Go to review page</Button>
                    </Box>
                </Box>
            </Menu>

            <Button variant="outlined" className={style.viewQuestionsBtn} onClick={onOpenMenu}>
                Questions
            </Button>

            <Box className={style.navigation}>
                <Button variant="outlined" onClick={onBack}>
                    Back
                </Button>

                <Button variant="outlined" onClick={onNext}>
                    Next
                </Button>
            </Box>
        </Box>
    );
}
