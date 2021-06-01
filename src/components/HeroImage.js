import './style/HeroImage.css';

export default function HeroImage() {
    return (
        <div className='hero-container'>
            <div className="hero-card">
                <div className='hero-info'>
                    <h1>La vida es short y el world muy grande...</h1>
                    <h3>Reserva GRATIS el mejor free-tour con guías locales y no pierdas ni un moment</h3>
                </div>
                <div className='hero-input'>
                    <h1>ME VOY A...</h1>
                    <input type='text' placeholder='ej: París, Madrid, New York...'/>
                    <button>¡BUSCA!</button>
                </div>
            </div>
        </div>
    )
}
