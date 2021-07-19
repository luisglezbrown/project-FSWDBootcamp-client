import Answers from "../components/Answers";
import BecomeAGuide from "../components/BecomeAGuide";
import HeroImage from "../components/HeroImage";
import LatestGuides from "../components/LatestGuides";
import TopDestinations from "../components/TopDestinations";

export default function Index() {
    return (
        <>
            <HeroImage />
            <TopDestinations />
            <Answers />
            <LatestGuides />
            <BecomeAGuide />
        </>
    )
}
