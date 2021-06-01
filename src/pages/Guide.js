import Navbar from "../components/Navbar";
import TourCard from "../components/TourCard";
import GuideDetails from "../components/GuideDetails";

export default function Guide() {

    const API_GUIDE_DETAILS = {
        id: 1503,
        name: "Alfonso",
        cityName: "Cartagena de Indias",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis rem aut tenetur modi doloribus qui.",
        longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum. Aspernatur similique molestiae quos earum suscipit nostrum consequatur, voluptatibus iure delectus laboriosam tempore vel illum dolores ut neque error maxime facilis cum. Provident quaerat impedit porro. Delectus at distinctio recusandae veritatis dolorem consectetur quas eius, perferendis labore exercitationem itaque doloribus officia odit nostrum, sed nihil. Vero aut quas facere labore laborum esse inventore dolore architecto molestiae. Harum vitae totam ut consectetur ea corrupti doloribus vero! Rem reprehenderit minima optio amet reiciendis. Corporis sint minus ipsum numquam, enim saepe quaerat porro libero adipisci reprehenderit vitae inventore, corrupti quae sapiente deserunt aut!",
        tours: [
            {id: 15001, guideId: 1503, guideName: "Alfonso", duration: 3, imgpath: "IMG_0172.jpg", categoryLabels: ["Panorámico"], name: "Paseando por Cartagena", highlight: "Un paseo inolvidable por Cartagena."},
            {id: 15003, guideId: 1503, guideName: "Alfonso", duration: 3, imgpath: "IMG_2354.jpg", categoryLabels: ["Playa"], name: "Día de playa en Islas del Rosario", highlight: "Disfruta del placer en las Islas Corales del Rosario."},
        ]
    };

    const guide = API_GUIDE_DETAILS;
    const tours = API_GUIDE_DETAILS.tours;

    return (
        <>  
            <Navbar />
            <div className='section-container'>
                <GuideDetails guide={guide} />
                <h1>Los tours de {guide.name}:</h1>
                <div className='cards-container'>
                    {tours.map(tour => <TourCard tour={tour} key={tour.id}/>)}
                </div>
            </div>      
        </>
    )
}
