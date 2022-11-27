import "../style/karticaMalice.css";
import image from "../style/mesni.png";

const karticaMalica = () => {



    return (
        <div className="karticaMalic">
            <div className="karticaMalica__gumb">
            <button onClick="">Naroči</button>
        </div>
        <div className="karticaMalica__slika">
            <img src={image} alt="slika malice" height={150} />
        </div>

        <div className="karticaMalica__opis">
            <h3>d</h3>
            <p></p>
        </div>
        <div className="karticaMalica__cena">
            <p>3.09</p>
        </div>

    </div>
    );


}

export default karticaMalica;