import LastGuideCard from "./LastGuideCard";

import './style/LatestGuides.css'

export default function LatestGuides() {

// Meter la API en un useState

    const API_LATEST_GUIDES = {
        total: 4,
        results: [
            {id: 1, name: "Pepe", city: "París", about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam animi quos corrupti eaque odit id officia magni possimus repudiandae dignissimos!"},
            {id: 2, name: "Claudia", city: "New York", about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta eligendi fugit officiis aliquam ea animi cum ipsa veniam dolor numquam."},
            {id: 3, name: "Sara", city: "Barcelona", about: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae dolor voluptas molestiae expedita minus aliquam molestias vel, accusantium cumque nisi!"},
            {id: 4, name: "Felipe", city: "Estambul", about: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas quis dolores cum animi tempore pariatur ducimus sequi labore perferendis delectus?"},
        ]
    };

/*     useEffect(() => {
        // TODO: fetch a mi endpoint
    }, []) */

    let guides = API_LATEST_GUIDES.results;

    return (
        <section className='section-container'>
            <header className='header-container'>
                <h1>LocalZ recién llegados</h1>
            </header>
            <div className='cards-container'>
                {guides.map(guide => <LastGuideCard guide={guide} key={guide.id}/>)}
            </div>
        </section>
    )
}
