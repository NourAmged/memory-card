import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [score, setScore] = useState(-1);
    const [bestScore, setBestScore] = useState(0);

    return (
        <>
            <Header score={score} bestScore={bestScore} />
            <Main setScore={setScore} score={score} setBestScore={setBestScore} bestScore={bestScore}   />
        </>
    );
}

export default App;
