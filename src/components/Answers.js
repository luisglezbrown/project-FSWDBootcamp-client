import AnswerCard from './AnswerCard'

import './style/Answers.css'

export default function Answers() {

    const FAQ = [
        {  question: "¿QUÉ ES LOCALZ?",
            answer: "LocalZ es el sitio que conecta viajeros como tú con los mejores guías de free-tour del mundo.",
            imgPath: "answer1.png"},

        { question: "¿CÓMO RESERVO?",
            answer: "Reservar un free-tour es fácil... y ¡gratis! Elige tu localz favorito, regístrate y recibe la confirmación por email.",
            imgPath: "answer2.png"},

        { question: "¿CUÁNTO CUESTA?",
            answer: "¡Tacháaaaan! Lo que te preguntabas desde que llegaste ;) Tu localz lo dará todo por mostrarte su ciudad y al final del tour eliges cuánto cuesta en función de tu experiencia.",
            imgPath: "answer3.png"}
    ];

    return (
        <section className="answers-container">
            {FAQ.map(question => <AnswerCard question={question.question} answer={question.answer} imgpath={question.imgPath} key={question.question}/>)}
        </section>
    )
}
