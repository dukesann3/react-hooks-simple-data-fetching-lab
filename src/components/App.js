// create your App component here
import { useEffect, useState } from "react"

function App() {

    const url = 'https://dog.ceo/api/breeds/image/random';
    const [imageSRC, setImageSRC] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                const { message } = data;
                setImageSRC(message);
            });
    }, []);

    function imageLoad() {
        if (!imageSRC) {
            return <p>Loading...</p>
        }

        return <img src={imageSRC} alt='A Random Dog'></img>
    }


    return (
        <div>
            {imageLoad()}
        </div>
    )
}

export default App;
