import Navbar from "../components/Navbar";
import ResultsBanner from "../components/ResultsBanner";
import TourCard from "../components/TourCard";

export default function AllCities() {


    // TODO: useState();

    const API_TOURS_BY_CITY = {
        city_id: 15,
        city_name: "Cartagena de Indias",
        total_tours: 63,
        total_pages: 7,
        page: 1,
        tours: [
            {id: 15001, guideId: 1503, guideName: "Alfonso", duration: 3, imgpath: "IMG_0172.jpg", categoryLabels: ["Panorámico"], name: "Paseando por Cartagena", highlight: "Un paseo inolvidable por Cartagena."},
            {id: 15002, guideId: 1502, guideName: "Ana Teresa", duration: 4, imgpath: "IMG_8545.jpg", categoryLabels: ["Panorámico", "Tradicional"], name: "Cartagena Colonial y Folklore", highlight: "Descubre la magia de Cartagena de Indias."},
            {id: 15003, guideId: 1503, guideName: "Alfonso", duration: 3, imgpath: "IMG_2354.jpg", categoryLabels: ["Playa"], name: "Día de playa en Islas del Rosario", highlight: "Disfruta del placer en las Islas Corales del Rosario."},
            {id: 15004, guideId: 1505, guideName: "Felipe", duration: 3, imgpath: "IMG_0940.jpg", categoryLabels: ["Historia", "Tradición"], name: "Lo Mejor de Cartagena", highlight: "Descubre el pasado y el presente de Cartagena."},
            {id: 15005, guideId: 1505, guideName: "Felipe", duration: 3, imgpath: "IMG_6044.jpg", categoryLabels: ["Alternativo"], name: "Descubriendo Getsemaní", highlight: "¡Descubre la historia no contada del famoso barrio de Getsemani!"},
            {id: 15006, guideId: 1507, guideName: "Kevin", duration: 2, imgpath: "IMG_0300.jpg", categoryLabels: ["Alternativo"], name: "Explorando Corralito de Piedra", highlight: "Este es un recorrido en el que aprenderá sobre la historia y la cultura de por qué Cartagena fue declarada Patrimonio de la Humanidad"},
            {id: 15007, guideId: 1507, guideName: "Kevin", duration: 3, imgpath: "IMG_1006.jpg", categoryLabels: ["Alternativo", "Historia"], name: "Mitos y Leyendas de Cartagena", highlight: "Se trata de un recorrido a pie que busca hablar de la ciudad de Cartagena de Indias desde una perspectiva diferente."},
            {id: 15008, guideId: 1510, guideName: "Jorge Juan", duration: 3, imgpath: "IMG_1983.jpg", categoryLabels: ["Tradición", "Gastro"], name: "Sabores del Mercado de Bazurto", highlight: "Mercado local donde las experiencias culinarias serán tu especialidad, Entra en contacto directo con la popular Cartagena que ríe, sueña y disfruta."},
            {id: 15009, guideId: 1502, guideName: "Ana Teresa", duration: 5, imgpath: "IMG_8009.jpg", categoryLabels: ["Historia", "Panorámico"], name: "La Ciudad Amurallada", highlight: "Conoce la historia de las míticas murallas que rodean 'La Heroica', sus calles, su evolución en el tiempo y su importancia."},
            {id: 15010, guideId: 1510, guideName: "Jorge Juan", duration: 3, imgpath: "IMG_1777.jpg", categoryLabels: ["Compras", "Tradición"], name: "Buscando las Esmeraldas Colombianas", highlight: "Les informamos porque las esmeraldas Colombianas son las mejores del mundo, son las más raras, bellas y escasas."},
        ]
    };

    /*     useEffect(() => {
        // TODO: fetch a mi endpoint "allCities"
    }, []) */

    let info = API_TOURS_BY_CITY
    let tours = API_TOURS_BY_CITY.tours;

    
    const HEADER_CONTENT = `¡Vamos a ${info.city_name}!`;
    const TEXT_CONTENT = `${info.total_tours} free-tours disponibles. Echa un vistazo y reserva el tuyo ¡GRATIS!`;
    const IMG_URL = `/images/cities/card-${info.city_id}.png`;
    const INLINE_STYLE = {backgroundImage: `linear-gradient(95deg, #d4d4d4 0%, rgba(255,255,255,1) 65%, rgba(255,204,0,0) 75%), url(${IMG_URL})`};

    return (
        <>
            <Navbar />
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT} style={INLINE_STYLE}/>

            <div className='section-container'>
                {/*TODO: <Filters }> */}<p>Bloque de filtros</p>
                <div className='cards-container'>
                    {tours.map(tour => <TourCard tour={tour} key={tour.id}/>)}
                </div>
            </div>
        </>
    )
}
