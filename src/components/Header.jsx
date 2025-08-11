import logo from '../assets/bird-svgrepo-com.svg';


function Header({score, bestScore}) {
    return (
        <header>
            <p className='logo'><img src={logo} width='32px' height='32px' /> MEMOBIRD</p>
            <div className="score-contaier">
                <span id="score">Score: {score} | </span>
                <span id="best-score">Best Score: {bestScore}</span>
            </div>
        </header >
    );
}

export default Header;