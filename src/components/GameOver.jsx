function GameOver() {
    return (
        <div className="main-content">
            <div className="game-over-container">
                <div>
                    <p>Game Over</p>
                    <p>Your Best Score 999</p>
                </div>
                <button onClick={() => { window.location.reload() }}>restart</button>
            </div>
        </div>
    );
}

export default GameOver;