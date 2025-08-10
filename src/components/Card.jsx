function Card({ name, image, id, setCurrentPick, currentPick }) {
    return (
        <div className="card" onClick={() => setCurrentPick([...currentPick, id])}>
            <img src={image} width={'150px'} height={'100px'} />
            <p>{name}</p>
        </div>
    );
}

export default Card;