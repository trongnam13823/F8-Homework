import { ExamDetailI } from "@/types/exam.types";
import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";

export default function ({ details, onChoice }: { details: ExamDetailI[]; onChoice: (index: number) => void }) {
    return (
        <Box sx={{ display: "grid", gridTemplateColumns: "repeat(20, 1fr)", gap: 1 }}>
            {details.map((detail, index) => (
                <Badge key={detail.id} color="error" variant="dot" invisible={!detail.question.isReview}>
                    <Box
                        onClick={() => onChoice(index)}
                        key={index}
                        sx={{
                            width: 40,
                            height: 40,
                            backgroundColor: detail.question?.answer ? "#1976d2" : "#fff",
                            borderRadius: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: detail.question?.answer ? "#fff" : "#1976d2",
                            border: "1px solid #1976d2",
                            fontWeight: "bold",
                            cursor: "pointer",
                        }}
                    >
                        {index + 1}
                    </Box>
                </Badge>
            ))}
        </Box>
    );
}
