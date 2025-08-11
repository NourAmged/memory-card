function GameOver({bestScore, reset}) {
    return (
        <div className="main-content">
            <div className="game-over-container">
                <div>
                    <p>Game Over</p>
                    <p>Your Best Score is {bestScore}</p>
                </div>
                <button onClick={reset }>restart</button>
            </div>
        </div>
    );
}

export default GameOver;