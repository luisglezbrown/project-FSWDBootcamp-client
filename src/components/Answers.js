import AnswerCard from './AnswerCard'
import { QUESTION_1, ANSWER_1, IMAGE_PATH_1, QUESTION_2, ANSWER_2, IMAGE_PATH_2, QUESTION_3, ANSWER_3, IMAGE_PATH_3 } from './AnswersSettings'

import './style/Answers.css'

export default function Answers() {

    return (
        <section className="answers-container">
            <AnswerCard question={QUESTION_1} answer={ANSWER_1} imgpath={IMAGE_PATH_1} />            
            <AnswerCard question={QUESTION_2} answer={ANSWER_2} imgpath={IMAGE_PATH_2} />
            <AnswerCard question={QUESTION_3} answer={ANSWER_3} imgpath={IMAGE_PATH_3} />
        </section>
    )
}
