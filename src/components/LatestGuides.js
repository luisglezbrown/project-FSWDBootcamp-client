import LastGuideCard from "./LastGuideCard";
import { useEffect, useState } from "react";
import { GET_GUIDES_LATEST } from '../config/config';

export default function LatestGuides() {

    const [latestGuides, setLatestGuides] = useState([])

    useEffect(() => {
        fetch(GET_GUIDES_LATEST)
        .then(response => response.json())
        .then(data => setLatestGuides(data.results))
    }, [])

    return (
        <section className='section-container'>
            <header className='header-container'>
                <h1>LocalZ recién llegados</h1>
            </header>
            <div className='grid cardsx4'>
                {latestGuides.map(guide => <LastGuideCard guide={guide} key={guide.id}/>)}
            </div>
        </section>
    )
}
