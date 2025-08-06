
import { useEffect, useState } from "react";
import Card from "./Card";

function Main() {
    const [birdData, setBirdData] = useState(null);


    useEffect(() => {
        fetch('https://nuthatch.lastelm.software/v2/birds?family=Troglodytidae&hasImg=true', {
            headers: {
                'api-key': `${import.meta.env.VITE_API_KEY}`
            }
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not OK');
                }
                return response.text(); 
            })
            .then((text) => {
                try {
                    const data = JSON.parse(text);
                    setBirdData(data);
                } catch (err) {
                    console.error('Manual JSON parse failed:', err);
                }
            })
            .catch((error) => {
                console.error('Fetch error:', error);
            });
    }, []);


    return (
        <div className="main-content">
            <div className="card-container">
                <div className="first-row">
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="second-row">
                    <Card />
                    <Card />
                    <Card />
                </div>
            </div>
        </div>
    );
}

export default Main;