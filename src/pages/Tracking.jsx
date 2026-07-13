import { useState } from "react";
import { useNavigate } from "react-router-dom";
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

    // Sauvegarde du suivi actuel
    localStorage.setItem("montant", montant);
    localStorage.setItem("jours", jours);
    localStorage.setItem("dateRecharge", maintenant.toISOString());

    // Sauvegarde dans l'historique
    const historique =
      JSON.parse(localStorage.getItem("historique")) || [];

    historique.unshift({

      montant: montant,

      jours: jours,

      date: maintenant.toLocaleDateString("fr-FR"),

      heure: maintenant.toLocaleTimeString("fr-FR", {
        hour: "2-digit",
        minute: "2-digit"
      })

    });

    localStorage.setItem(
      "historique",
      JSON.stringify(historique)
    );

    navigate("/dashboard");

  }

  return (

    <div className="tracking">

      <div className="trackingCard">

        <h1>⚡ Nouveau suivi</h1>

        <p>

          Renseignez les informations de votre recharge.

        </p>

        <label>Montant rechargé (FCFA)</label>

        <input
          type="number"
          placeholder="Exemple : 5000"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
        />

        <label>Durée habituelle (jours)</label>

        <input
          type="number"
          placeholder="Exemple : 30"
          value={jours}
          onChange={(e) => setJours(e.target.value)}
        />

        <button onClick={lancerSuivi}>

          Lancer le suivi

        </button>

      </div>

    </div>

  );

}

export default Tracking;