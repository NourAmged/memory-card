export default function getRandomBirds(birds){
    return [...birds].sort(() => Math.random() - 0.5);
}