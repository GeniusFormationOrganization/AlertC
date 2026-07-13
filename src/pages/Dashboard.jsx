import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaCalendarAlt,
  FaRedo,
  FaClock
} from "react-icons/fa";

import BottomNav from "../components/BottomNav";
import "../styles/dashboard.css";

function Dashboard() {

  const navigate = useNavigate();

  const montant = Number(localStorage.getItem("montant")) || 0;
  const jours = Number(localStorage.getItem("jours")) || 0;
  const dateRecharge = localStorage.getItem("dateRecharge");

  if (!dateRecharge) {

    return (

      <div className="dashboard">

        <div className="empty-card">

          <h2>Aucun suivi actif</h2>

          <p>

            Commencez par enregistrer une recharge.

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

  const debut = new Date(dateRecharge);
  const aujourdhui = new Date();

  const joursEcoules = Math.floor(
    (aujourdhui - debut) / (1000 * 60 * 60 * 24)
  );

  const joursRestants = Math.max(jours - joursEcoules, 0);

  const pourcentage = Math.round(
    (joursRestants / jours) * 100
  );

  const dateFin = new Date(debut);

  dateFin.setDate(dateFin.getDate() + jours);

  let statut = "Crédit suffisant";
  let couleur = "#22C55E";

  if (joursRestants <= 3) {

    statut = "Attention : il reste environ 3 jours.";
    couleur = "#F59E0B";

  }

  if (joursRestants <= 2) {

    statut = "Attention : il reste environ 2 jours.";
    couleur = "#F97316";

  }

  if (joursRestants <= 1) {

    statut = "Urgent : rechargez votre crédit.";
    couleur = "#EF4444";

  }

  if (joursRestants === 0) {

    statut = "Votre crédit est estimé terminé.";
    couleur = "#DC2626";

  }

  return (

    <div className="dashboard">

      <h1>⚡ AlertC</h1>

      <p className="subtitle">

        Tableau de bord

      </p>

      <div className="progress-card">

        <div
          className="progress-ring"
          style={{
            background: `conic-gradient(
              #2563EB ${pourcentage * 3.6}deg,
              #E5E7EB 0deg
            )`
          }}
        >

          <div className="progress-center">

            <h2>{pourcentage}%</h2>

            <span>restant</span>

          </div>

        </div>

        <h3>{joursRestants} jour(s)</h3>

        <p>avant la fin estimée</p>

      </div>

      <div className="info-card">

        <div className="row">

          <FaWallet className="icon"/>

          <div>

            <span>Montant</span>

            <h4>{montant} FCFA</h4>

          </div>

        </div>

        <div className="row">

          <FaCalendarAlt className="icon"/>

          <div>

            <span>Date estimée de fin</span>

            <h4>{dateFin.toLocaleDateString("fr-FR")}</h4>

          </div>

        </div>

        <div className="row">

          <FaClock className="icon"/>

          <div>

            <span>Temps restant</span>

            <h4>{joursRestants} jour(s)</h4>

          </div>

        </div>

      </div>

      <div
        className="status-card"
        style={{ borderLeft: `8px solid ${couleur}` }}
      >

        <strong>{statut}</strong>

      </div>

      <button
        className="primary-btn"
        onClick={() => navigate("/tracking")}
      >

        <FaRedo />

        Nouvelle recharge

      </button>

      <BottomNav/>

    </div>

  );

}

export default Dashboard;