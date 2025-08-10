
import { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

function Main() {
    const [birdData, setBirdData] = useState(null);
    const [currentPick, setCurrentPick] = useState([]);

    useEffect(() => {
        const API_KEY = import.meta.env.VITE_API_KEY;
        const url = "https://nuthatch.lastelm.software/v2/birds?family=Cardinalidae&hasImg=true";

        fetch(url, { headers: { 'api-key': `${API_KEY}` } })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not OK (${response.status})`);
                }
                return response.json();
            })
            .then((data) => {
                setBirdData(data);
            })
            .catch((err) => {
                console.error('Fetch or parse error:', err);
            });
    }, []);


    useEffect(() => {
        const lastPickIdx = currentPick.length - 1;
        const prevPickIdx = currentPick.length - 2;

        if(currentPick.length > 1 && currentPick[lastPickIdx] === currentPick[prevPickIdx])
            console.log("YOU LOSE");
    }, [currentPick]);


    if (!birdData || !birdData.entities) {
        return <Loading />;
    }

    return (
        <div className="main-content">
            <div className="card-container">
                <div className="first-row">
                    {birdData["entities"].slice(0, 2).map((item) => {
                        return <Card key={item.id} name={item.name} image={item.images[0]} id={item.id} setCurrentPick={setCurrentPick} currentPick={currentPick} />
                    })}
                </div>
                <div className="second-row">
                    {birdData["entities"].slice(2, 4).map((item) => {
                        return <Card key={item.id} name={item.name} image={item.images[0]} id={item.id} setCurrentPick={setCurrentPick} currentPick={currentPick} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default Main;