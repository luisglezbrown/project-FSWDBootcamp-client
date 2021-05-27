import CityCard from "./CityCard";

/* import './style/CityCardsGenerator.css'
 */
export default function CityCardsGenerator({ data }) {

    return (

        <div className='cards-container'>
            {data.map(city => <CityCard city={city} key={city.id}/>)}
        </div>

    )
}
