function Card({name, image}) {
    return (
        <div className="card">
            <img src = {image} width={'150px'} />
            <p>{name}</p>
        </div>
    );
}

export default Card;