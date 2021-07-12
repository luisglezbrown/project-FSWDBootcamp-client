import { STATIC_FOLDER } from "../config/config"
import './style/AdvantageCard.css'

export default function AdvantageCard({ title, text, imgpath, style, index }) {
    return (
        <div className="advantage-card" style={style} key={index}>
            <img src={STATIC_FOLDER + "advantages/" + imgpath} alt={title} />
            <div className="text-container">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
