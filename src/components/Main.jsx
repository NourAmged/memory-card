
import { useEffect, useState } from "react";
import BirdRow from "./BirdRow";
import Loading from "./Loading";
import GameOver from "./GameOver";
import getRandomBirds from "../utils/shuffle";

const API_KEY = import.meta.env.VITE_API_KEY;

function Main() {
    const [birdData, setBirdData] = useState(null);
    const [currentPick, setCurrentPick] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const url = "https://nuthatch.lastelm.software/v2/birds?family=Cardinalidae&hasImg=true";

        fetch(url, { headers: { "api-key": API_KEY } })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not OK (${response.status})`);
                }
                return response.json();
            })
            .then((data) => setBirdData(data))
            .catch((err) => console.error("Fetch or parse error:", err));
    }, []);

    useEffect(() => {
        const uniquePicks = [...new Set(currentPick)];
        if (currentPick.length > 1 && currentPick.length !== uniquePicks.length) {
            setGameOver(true);
        }
    }, [currentPick]);

    if (!birdData || !birdData.entities) return <Loading />;
    if (gameOver) return <GameOver />;

    const shuffledBirds = getRandomBirds(birdData.entities);
    const firstRow = shuffledBirds.slice(0, 2);
    const secondRow = shuffledBirds.slice(2, 4);

    return (
        <div className="main-content">
            <div className="card-container">
                <div className="first-row">
                    <BirdRow birds={firstRow} currentPick={currentPick} setCurrentPick={setCurrentPick} />
                </div>
                <div className="second-row">
                    <BirdRow birds={secondRow} currentPick={currentPick} setCurrentPick={setCurrentPick} />
                </div>
            </div>
        </div>
    );
}

export default Main;