import Advantages from "../components/Advantages";
import ResultsBanner from "../components/ResultsBanner";
import GuideRegisterForm from "../components/GuideRegisterForm"

export default function GuideRegister() {

    const HEADER_CONTENT = `¡Conviértete en Localz ahora!`;
    const TEXT_CONTENT = 'Los "localz" son guías locales con gran conocimiento de la ciudad y que ofrecen free-tours. Conoce viajeros de todo el mundo, elige tus propios horarios, comparte tu cultura y pasión.';


    return (
        <>
            <ResultsBanner header={HEADER_CONTENT} text={TEXT_CONTENT} />
            <Advantages />
            <GuideRegisterForm />
        </>
    )
}
