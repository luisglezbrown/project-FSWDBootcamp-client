import Advantages from "../components/Advantages";
import Navbar from "../components/Navbar";
import ResultsBanner from "../components/ResultsBanner";

export default function GuideRegister() {

    const HEADER_CONTENT = `¡Conviértete en Localz ahora!`;
    const TEXT_CONTENT = 'Los "localz" son guías locales con gran conocimiento de la ciudad y que ofrecen free-tours. Conoce viajeros de todo el mundo, elige tus propios horarios, comparte tu cultura y pasión.';


    return (
        <>
            <Navbar />
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT} />
            <Advantages />
        </>
    )
}
