import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBolt
} from "react-icons/fa";

import "../styles/tracking.css";

function Tracking() {

  const navigate = useNavigate();

  const [montant, setMontant] = useState("");

  const [jours, setJours] = useState("");

  function lancerSuivi() {

    if (montant === "" || jours === "") {

      alert("Veuillez remplir tous les champs.");

      return;

    }

    const maintenant = new Date();

    localStorage.setItem("montant", montant);

    localStorage.setItem("jours", jours);

    localStorage.setItem(
      "dateRecharge",
      maintenant.toISOString()
    );

    const historique =

      JSON.parse(
        localStorage.getItem("historique")
      ) || [];

    historique.unshift({

      montant,

      jours,

      date: maintenant.toLocaleDateString("fr-FR"),

      heure: maintenant.toLocaleTimeString(
        "fr-FR",
        {
          hour: "2-digit",
          minute: "2-digit"
        }
      )

    });

    localStorage.setItem(

      "historique",

      JSON.stringify(historique)

    );

    navigate("/dashboard");

  }

  return (

    <div className="tracking">

      <div className="tracking-card">

        <div className="tracking-header">

          <FaBolt className="tracking-logo"/>

          <h1>

            Nouveau suivi

          </h1>

          <p>

            Enregistrez votre recharge afin qu'AlertC puisse estimer votre consommation.

          </p>

        </div>

        <div className="input-group">

          <label>

            <FaMoneyBillWave/>

            Entré le Montant rechargé

          </label>

          <input

            type="number"

            placeholder="Ex : 5000"

            value={montant}

            onChange={(e)=>setMontant(e.target.value)}

          />

        </div>

        <div className="input-group">

          <label>

            <FaCalendarAlt/>

            Votre recharge vous dure habituellement combien de temps 

          </label>

          <input

            type="number"

            placeholder="Ex : 30 jours"

            value={jours}

            onChange={(e)=>setJours(e.target.value)}

          />

        </div>

        <button

          className="primary-btn"

          onClick={lancerSuivi}

        >

          Commencer le suivi

        </button>

      </div>

    </div>

  );

}

export default Tracking;