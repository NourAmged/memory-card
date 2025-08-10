import Card from "./Card";

function BirdRow({ birds, currentPick, setCurrentPick }) {
    return (
        <>
            {birds.map((item) => (
                <Card
                    key={item.id}
                    name={item.name}
                    image={item.images[0]}
                    id={item.id}
                    setCurrentPick={setCurrentPick}
                    currentPick={currentPick}
                />
            ))}
        </>
    );
}

export default BirdRow;