import "../style/karticaMalice.css";
import image from "../assets/mesni.png";

const karticaMalica = () => {
  return (
    <>
      <div className="karticaMalic">
        <div className="karticaMalica__gumb">
          <button onClick="">Naroči</button>
        </div>
        <div className="karticaMalica__slika">
          <img src={image} alt="slika malice" height={150} />
        </div>

        <div className="karticaMalica__opis">
          <h3>Mesni Meni</h3>
          <p>Mesna kroglica</p>
        </div>
      </div>
    </>
  );
};

export default karticaMalica;
