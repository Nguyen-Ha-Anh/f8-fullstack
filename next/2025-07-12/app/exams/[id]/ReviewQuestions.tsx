import {Box} from "@mui/material";
import {Context, ProviderI} from "./page";
import { useContext } from "react";

export default function ReviewQuestions() {

  const injector: ProviderI = useContext(Context)
  const { exam, setQuestionIndex} = injector

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 1,
      }}
    >
      {exam.details.map((item, index) => {
        const isAnswered = !!item.question.answer

        return (
          <Box
            key={index}
            onClick={() => setQuestionIndex(index)}
            sx={{
              width: 40,
              height: 40,
              borderRadius: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              border: '1px solid #1976d2',
              fontWeight: 'bold',
              color: isAnswered ? '#fff' : '#1976d2',
              backgroundColor: isAnswered ? '#1976d2' : '#fff',
            }}
          >
            {index + 1}
          </Box>
        )
      })}
    </Box>
  )
}