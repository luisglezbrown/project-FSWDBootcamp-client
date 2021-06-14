import './style/AdvantageCard.css'

export default function AdvantageCard({ title, text, imgpath, style }) {
    return (
        <div className="advantage-card" style={style}>
            <img src={imgpath} alt={title} />
            <div className="text-container">
                <h1>{title}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}
