function GameOver({bestScore}) {
    return (
        <div className="main-content">
            <div className="game-over-container">
                <div>
                    <p>Game Over</p>
                    <p>Your Best Score is {bestScore}</p>
                </div>
                <button onClick={() => { window.location.reload() }}>restart</button>
            </div>
        </div>
    );
}

export default GameOver;