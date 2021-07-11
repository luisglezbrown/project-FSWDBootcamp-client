import LastGuideCard from "./LastGuideCard";
import { useEffect, useState } from "react";

import './style/LatestGuides.css'

export default function LatestGuides() {

    const [latestGuides, setLatestGuides] = useState([])

    const API_LATEST_GUIDES = "http://127.0.0.1:8000/api/latestguides"

    useEffect(() => {
        fetch(API_LATEST_GUIDES)
        .then(response => response.json())
        .then(data => setLatestGuides(data.results))
    }, [])

    let guides = latestGuides;

    return (
        <section className='guides-section-container'>
            <header className='guides-header-container'>
                <h1>LocalZ recién llegados</h1>
            </header>
            <div className='guides-cards-container'>
                {guides.map(guide => <LastGuideCard guide={guide} key={guide.id}/>)}
            </div>
        </section>
    )
}
