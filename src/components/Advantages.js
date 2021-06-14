import AdvantageCard from './AdvantageCard'

import './style/Advantages.css'

export default function Advantages() {

    const ADVANTAGES = [
        {  title: "¡SIN JEFES!",
            text: "¿Te gustaría mostrar los fascinantes lugares que hay en tu ciudad? ¿Conoces todos los rincones de arte callejero? Tal vez eres amante de la historia, o simplemente tienes un buen conocimiento de la comida tradicional de tu país y sus costumbres. Sea cual sea tu experiencia, ¡crea tu propio tour personalizado y compártelo con el mundo! Elige tus horarios, qué días quieres trabajar y nosotros nos ocupamos de enviarte viajeros de todo el mundo. ¡Conviértete en localz de tu ciudad!",
            imgPath: "/images/advantages/img1.png"},

        { title: "¡0 INVERSION, 0 RIESGO! ",
            text: "Podrás crear tu propio free-tour sin tener que crear una web o invertir en marketing. Obtendrás tu propia página en Localz donde los viajeros te pueden reservar, para que tú solo tengas que hacer lo que más te gusta, realizar tu free-tour, y de lo demás. ¡Nos encargamos nosotros! ¿A qué esperas para vivir la experiencia de ser localz?.",
            imgPath: "/images/advantages/img2.png"},

        { title: "HAZ DINERO DE TU PASIÓN",
            text: "¿Cuánto dinero se gana haciendo free-tours? La media de los pagos recibidos suele ser de 8€, algunos viajeros te darán 5€ y otros 50€. Con grupos de 10 a 30 personas en dos horas puedes ganar mucho más dinero que en cualquier otro tipo de trabajo. Te animamos a que empieces a trabajar de lo que te apasiona con Localz .",
            imgPath: "/images/advantages/img3.png"}
    ];

    return (
        <section className="advantages-container">
            {ADVANTAGES.map(advantage => <AdvantageCard title={advantage.title} text={advantage.text} imgpath={advantage.imgPath}/>)}
        </section>
    )
}
