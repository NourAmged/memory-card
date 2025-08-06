
import { useEffect, useState } from "react";
import Card from "./Card";

function Main() {
    const [birdData, setBirdData] = useState(null);


    useEffect(() => {
        fetch('https://nuthatch.lastelm.software/v2/birds?family=Troglodytidae&hasImg=true', {
            headers: {
                'api-key': import.meta.env.VITE_API_KEY
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not OK');
            }
            return response.text();
        }).then((text) => {
            try {
                const data = JSON.parse(text);
                setBirdData(data);
            } catch (err) {
                console.error('Manual JSON parse failed:', err);
            }
        }).catch((error) => {
            console.error('Fetch error:', error);
        });
    }, []);

    console.log(birdData);

    return (
        <div className="main-content">
            <div className="card-container">
                <div className="first-row">
                    {birdData["entities"].map((item) => {
                        return <Card key={item.id} name={item.name} image={item.images[0]} />
                    })}
                </div>
                <div className="second-row">
                    {birdData["entities"].map((item) => {
                        return <Card key={item.id} name={item.name} image={item.images[0]} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Main;