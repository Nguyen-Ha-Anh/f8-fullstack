'use client'

import {Box, Grid} from "@mui/material";
import style from './style.module.sass'
import QuestionDescription from './Description'
import QuestionSelection from './Selection'
import HeaderBar from './Header'
import FooterBar from './Footer'
import { useParams } from "next/navigation";
import { useEffect, useState, useMemo, createContext } from "react";
import api from "@/plugins/api";
import { ExamDetailI, ExamI, PathI, QuestionType, QuestionI } from "@/app/utils/type";

export interface Question extends QuestionI {
  isReview?:  boolean
  answer?: string
}

export interface ExamDetail extends ExamDetailI {
    question: Question
}

export interface Exam extends ExamI {
    details: Array<ExamDetail>
}
// export interface AnswerI {
//   [key: number]: {
//     answer: string,
//     isReview: boolean
//   }
// }
export interface ProviderI {
  exam: Exam
  question: QuestionI
  setQuestionIndex: (questionIndex: number) => void
  questionIndex: number
}

const defaultExam: Exam = {
  id: undefined,
  title: '',
  description: '',
  details: [
    {
      id: undefined,
      section: 0,
      module: 0,
      question: {
        id: undefined,
        code: '',
        description: '',
        question: '',
        type: QuestionType.MULTIPLE_CHOICE,
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '',
        explanation: '',
      }
    }
  ]
}

export const PARTS: PathI[] = [
  {section: 1, module: 1},
  {section: 1, module: 2},
  {section: 2, module: 1},
  {section: 2, module: 2},
]

export const Context: any = createContext(null)

export default function () {
  const params = useParams()
  const {id} = params
  const [exam, setExam] = useState<ExamI>(defaultExam)
  const [partIndex, setPartIndex] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const examDetail: ExamDetailI = useMemo(() => {
    return exam.details[questionIndex]
  }, [questionIndex, exam])

  const question: QuestionI = useMemo(() => {
    return examDetail.question
  }, [examDetail])

  const getExam = async () => {
    try {
      const {data} = await api.get(`/exams/${id}`)
      setExam(data)
    } catch (e) {
      console.log(e)
    }
  }

  const provider: ProviderI = {
    exam,
    question,
    setQuestionIndex,
    questionIndex,
  }

  useEffect(() => {
    getExam()
  }, [])

  return (
    <>
      <Context.Provider value={provider}>
        <HeaderBar/>
        <Box sx={{margin: '0 5%'}} className={style.main}>
          <Grid container>
            <Grid size={6} sx={{paddingTop: '10px'}}>
              <QuestionDescription/>
            </Grid>
            <Grid size={6}>
              <QuestionSelection/>
            </Grid>
          </Grid>
        </Box>
        <FooterBar/>
      </Context.Provider>
    </>
  )
}