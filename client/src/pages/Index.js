import Answers from "../components/Answers";
import HeroImage from "../components/HeroImage";
import LatestGuides from "../components/LatestGuides";
import Navbar from '../components/Navbar';
import TopDestinations from "../components/TopDestinations";

export default function Index() {
    return (
        <>
            <Navbar />
            <HeroImage />
            <TopDestinations />
            <Answers />
            <LatestGuides />

        </>
    )
}
