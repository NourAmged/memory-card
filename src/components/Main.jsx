
import { useEffect, useState } from "react";
import BirdRow from "./BirdRow";
import Loading from "./Loading";
import GameOver from "./GameOver";
import getRandomBirds from "../utils/shuffle";

const API_KEY = import.meta.env.VITE_API_KEY;

function Main({ setScore, score, setBestScore, bestScore }) {
    const [birdData, setBirdData] = useState(null);
    const [currentPick, setCurrentPick] = useState([]);
    const [gameOver, setGameOver] = useState(false);

    const fetchData = () => {
        const url = "https://nuthatch.lastelm.software/v2/birds?family=Cardinalidae&hasImg=true";

        fetch(url, { headers: { "api-key": API_KEY } })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not OK (${response.status})`);
                }
                return response.json();
            })
            .then((data) => setBirdData(data["entities"].slice(0, 4)))
            .catch((err) => console.error("Fetch or parse error:", err));
    };

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        const uniquePicks = [...new Set(currentPick)];
        if (currentPick.length > 1 && currentPick.length !== uniquePicks.length) {
            if (bestScore < score)
                setBestScore(score);
            setGameOver(true);
        }
        else
            setScore(score + 1);

    }, [currentPick]);


    const resetGame = () =>{
        setScore(-1);
        setCurrentPick([]);
        setGameOver(false);
        fetchData();
    }

    if (!birdData) return <Loading />;
    if (gameOver) return <GameOver bestScore={bestScore} reset={resetGame} />;

    const shuffledBirds = getRandomBirds(birdData);
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