import './style/AnswerCard.css'

export default function AnswerCard({ question, answer, imgpath}) {
    return (
        <div className="answer-card">
            <img src={imgpath} alt={question} />
            <h1>{question}</h1>
            <p>{answer}</p>
        </div>
    )
}
