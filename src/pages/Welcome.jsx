import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/welcome.css";

function Welcome() {

  const navigate = useNavigate();

  return (

    <div className="welcome">

      <div className="welcome-card">

        <img
          src={logo}
          alt="AlertC"
          className="welcome-logo"
        />

        <h1>

          Bienvenue sur AlertC

        </h1>

        <p>

          Suivez facilement votre crédit d'électricité,
          anticipez les coupures et recevez des alertes
          intelligentes avant la fin de votre recharge.

        </p>

        <button

          className="primary-btn"

          onClick={() => navigate("/tracking")}

        >

          Commencer

        </button>

      </div>

    </div>

  );

}

export default Welcome;