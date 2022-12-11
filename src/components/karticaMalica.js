import "../style/karticaMalice.css";
import image from "../assets/mesni.png";

const karticaMalica = ({ime, opis, slika}) => {


  return (
    <>
      <div className="karticaMalic">
        <div className="karticaMalica__gumb">
          <button>Naroči</button>
        </div>
        <div className="karticaMalica__slika">
          <img src={slika} alt="slika malice" height={150} />
        </div>

        <div className="karticaMalica__opis">
          <h3>{ime}</h3>
          <p>{opis}</p>
        </div>
      </div>
    </>
  );
};

export default karticaMalica;
