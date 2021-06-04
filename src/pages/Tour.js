import Navbar from '../components/Navbar';
import TourDetails from '../components/TourDetails';

export default function Tour() {

    const API_TOUR_DETAILS = {
        id: 15001,
        name: "Paseando por Cartagena",
        cityName: "Cartagena de Indias",
        cityId: 15,
        duration: 3,
        startTime: "15h30",
        meetingPoint: "Torre del Reloj, junto a la tienda de souvenirs",
        categoryLabels: ["Panorámico"],
        imgpath: "IMG_0172.jpg",
        shortDesc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis rem aut tenetur modi doloribus qui.",
        longDesc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, illum. Aspernatur similique molestiae quos earum suscipit nostrum consequatur, voluptatibus iure delectus laboriosam tempore vel illum dolores ut neque error maxime facilis cum. Provident quaerat impedit porro. Delectus at distinctio recusandae veritatis dolorem consectetur quas eius, perferendis labore exercitationem itaque doloribus officia odit nostrum, sed nihil. Vero aut quas facere labore laborum esse inventore dolore architecto molestiae. Harum vitae totam ut consectetur ea corrupti doloribus vero! Rem reprehenderit minima optio amet reiciendis. Corporis sint minus ipsum numquam, enim saepe quaerat porro libero adipisci reprehenderit vitae inventore, corrupti quae sapiente deserunt aut!",
        guide: {id: 1503, name: "Alfonso", duration: 3, imgpath: "guide1503.jpg"}
    };

    const guide = API_TOUR_DETAILS.guide;
    const tour = API_TOUR_DETAILS;

    return (
        <>
            <Navbar />
            <TourDetails guide={guide} tour={tour}/>
        </>
    )
}
