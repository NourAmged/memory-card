
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
    const [level, setLevel] = useState(0);

    const fetchData = (level = 0) => {
        const url = "https://nuthatch.lastelm.software/v2/birds?family=Cardinalidae&hasImg=true";

        fetch(url, { headers: { "api-key": API_KEY } })
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`Network response was not OK (${response.status})`);
                }
                return response.json();
            })
            .then((data) => setBirdData(data["entities"].slice(0, 4 + level)))
            .catch((err) => console.error("Fetch or parse error:", err));
    };

    useEffect(() => {
        fetchData(level);
    }, [level]);

    useEffect(() => {
        const uniquePicks = [...new Set(currentPick)];
        if (currentPick.length > 1 && currentPick.length !== uniquePicks.length) {
            if (bestScore < score)
                setBestScore(score);
            setGameOver(true);
        }

        else if (currentPick.length > 1 && birdData.length === currentPick.length) {
            setCurrentPick([]);
            setLevel(level + 2);
            fetchData(level);
        }

        else
            setScore(score + 1);

    }, [currentPick]);


    const resetGame = () => {
        setScore(-1);
        setCurrentPick([]);
        setGameOver(false);
        setLevel(0);
        fetchData();
    }

    if (!birdData) return <Loading />;
    if (gameOver) return <GameOver bestScore={bestScore} reset={resetGame} />;

    const mid = Math.floor(birdData.length / 2);
    const shuffledBirds = getRandomBirds(birdData);
    const firstRow = shuffledBirds.slice(0, mid);
    const secondRow = shuffledBirds.slice(mid, birdData.length);

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