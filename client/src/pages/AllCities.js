import Navbar from "../components/Navbar";
import ResultsBanner from "../components/ResultsBanner";
import CityCardsGenerator from "../components/CityCardsGenerator";

export default function AllCities() {
    const HEADER_CONTENT = `Descubre todas las ciudades...`;
    const TEXT_CONTENT = 'Cientos de localz te esperan en ellas para que no pierdas detalle';

    const API_CITIES = {
        total: 15,
        results: [
            {id: 1, name: "París", country: "Francia"},
            {id: 2, name: "New York", country: "Estados Unidos"},
            {id: 3, name: "Barcelona", country: "España"},
            {id: 15, name: "Cartagena de Indias", country: "Colombia"},
            {id: 16, name: "Tokio", country: "Japón"},
            {id: 5, name: "Londres", country: "Reino Unido"},
            {id: 6, name: "Rio de Janeiro", country: "Brasil"},
            {id: 7, name: "Abu Dhabi", country: "Emiratos Árabes"},
            {id: 9, name: "Roma", country: "Italia"},
            {id: 4, name: "Estambul", country: "Turquía"},
            {id: 10, name: "Atenas", country: "Grecia"},
            {id: 11, name: "Praga", country: "República Checa"},
            {id: 13, name: "San Petersburgo", country: "Rusia"},
            {id: 14, name: "San Francisco", country: "Estados Unidos"},
            {id: 8, name: "Viena", country: "Austria"},
            {id: 12, name: "Budapest", country: "Hungría"}
        ]
    };

    /*     useEffect(() => {
        // TODO: fetch a mi endpoint "all_cities"
    }, []) */

    let cities = API_CITIES.results;

    return (
        <>
            <Navbar />
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT}/>

            <div className='section-container'>
                <CityCardsGenerator data={cities} />
            </div>
        </>
    )
}
