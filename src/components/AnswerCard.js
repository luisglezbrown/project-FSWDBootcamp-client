import {STATIC_FOLDER} from "../config/config"
import './style/AnswerCard.css'

export default function AnswerCard({ question, answer, imgpath, style}) {
    return (
        <div className="answer-card" style={style}>
            <img src={STATIC_FOLDER + "answers/" + imgpath} alt={question} />
            <h1 >{question}</h1>
            <p>{answer}</p>
        </div>
    )
}
