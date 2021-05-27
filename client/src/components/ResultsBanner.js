import './style/ResultsBanner.css'

export default function ResultsBanner({ header, text}) {
    return (
        <div className="banner-container">
            <div className="banner-text">
                <h1>{header}</h1>
                <p> {text} </p>
            </div>
            <div className="banner-image"></div>

        </div>
    )
}
