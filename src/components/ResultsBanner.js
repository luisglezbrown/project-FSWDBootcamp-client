import './style/ResultsBanner.css'

export default function ResultsBanner({ header, text, style}) {

    return (
        <div className="banner-container" style={style}>
            <div className="banner-text">
                <h1>{header}</h1>
                <p> {text} </p>
            </div>
            <div className="banner-image"></div>

        </div>
    )
}
