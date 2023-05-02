import Monkey from "./Monkey";

const MonkeyGrid = () => {
    const images = ['/img/funkymonkeyog.jfif', '/img/bikeMonkey.jfif', '/img/coolMonkey.jfif', '/img/jeansMonkey.jfif', '/img/monkeyMan.jfif', '/img/pissedMonkey.jpg', '/img/realFunky.jfif', '/img/selfieMonkey.webp', '/img/smartMonkey.jfif', '/img/twelves.jfif', '/img/flamengoMonkey.jpg_large'];
    const gifs = ['/gif/banana.gif', '/gif/dance.gif', '/gif/gangster.gif', '/gif/greetingMonkey.gif', '/gif/monkey-eating.gif'];
    const monkeyAudio = '/audio/scream.wav';

    const playAudio = () => {
        const audio = new Audio(monkeyAudio);
        audio.play();
    }

    return ( 
        <>
            <h1 className="type">Imagens</h1>
            <div className="monkeys">
                {
                    images.map((image, index) => (
                        <div key={index} onMouseEnter={playAudio} >
                            <Monkey 
                                src={image} 
                            />
                        </div>
                ))}
            </div>
            <h1 className="type">Gifs</h1>
            <div className="monkeys">
                { 
                    gifs.map((gif, index) => (
                        <div  key={index} onMouseEnter={playAudio}>
                            <Monkey src={gif} />
                        </div>
                    ))
                }
            </div>
        </>
    );
}
 
export default MonkeyGrid;