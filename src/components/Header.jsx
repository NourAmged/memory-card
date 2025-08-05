import logo from '../assets/bird-svgrepo-com.svg';


function Header() {
    return (
        <header>
            <p className='logo'><img src={logo} width='28px' height='28px' /> MEMOBIRD</p>
            <div className="score-contaier">
                <span id="score">Score | </span>
                <span id="best-score">Best Score</span>
            </div>
        </header >
    );
}

export default Header;