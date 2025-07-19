import { ExamDetailI, QuestionI } from "@/types/exam.types";
import style from "./style.module.sass";
import { Box, Button } from "@mui/material";

export default function ({ detail }: { detail: ExamDetailI }) {
    return (
        <Box
            sx={{ height: 64, backgroundColor: "#cbedfd", padding: "0 5%" }}
            className={`flex justify--space-between align-items--center ${style.mainColor}`}
        >
            <Box>
                <b>
                    Section {detail.section} - Module {detail.module}
                </b>
            </Box>
            <Box>
                <b>30:30</b>
            </Box>
            <Box>
                <Button variant={"outlined"}>Submit</Button>
            </Box>
        </Box>
    );
}
