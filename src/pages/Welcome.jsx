import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/welcome.css";

function Welcome() {

  const navigate = useNavigate();

  return (

    <div className="welcome">

      <div className="card">

        <img
          src={logo}
          className="welcomeLogo"
          alt="AlertC"
        />

        <h1>Bienvenue sur AlertC</h1>

        <p>

          Anticipez les coupures d'électricité avant qu'elles ne surviennent.

        </p>

        <button
          onClick={() => navigate("/tracking")}
        >

          Commencer

        </button>

      </div>

    </div>

  );

}

export default Welcome;