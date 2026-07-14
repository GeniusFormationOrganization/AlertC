import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaCalendarAlt,
  FaRedo,
  FaClock,
  FaBolt
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

        <div className="dashboard-container">

          <div className="empty-card">

            <FaBolt className="empty-icon"/>

            <h2>Aucun suivi actif</h2>

            <p>

              Vous n'avez pas encore enregistré de recharge.
              Commencez maintenant pour suivre votre consommation.

            </p>

            <button
              className="primary-btn"
              onClick={() => navigate("/tracking")}
            >

              <FaRedo />

              Commencer

            </button>

          </div>

        </div>

        <BottomNav/>

      </div>

    );

  }

  const debut = new Date(dateRecharge);

  const aujourdhui = new Date();

  const joursEcoules = Math.floor(

    (aujourdhui - debut) / (1000 * 60 * 60 * 24)

  );

  const joursRestants = Math.max(

    jours - joursEcoules,

    0

  );

  const pourcentage = Math.round(

    (joursRestants / jours) * 100

  );

  const dateFin = new Date(debut);

  dateFin.setDate(

    dateFin.getDate() + jours

  );

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

      <div className="dashboard-container">

        <div className="dashboard-header">

          <div>

            <h1>

              ⚡ Tableau de bord

            </h1>

            <p>

              Suivi intelligent de votre crédit

            </p>

          </div>

        </div>

        <div className="dashboard-grid">

          <div className="progress-card">

            <div

              className="progress-ring"

              style={{

                background: `conic-gradient(

                  var(--primary)

                  ${pourcentage * 3.6}deg,

                  var(--border)

                  0deg

                )`

              }}

            >

              <div className="progress-center">

                <h2>

                  {pourcentage}%

                </h2>

                <span>

                  restant

                </span>

              </div>

            </div>

            <h3>

              {joursRestants} jour(s)

            </h3>

            <p>

              avant la fin estimée

            </p>

          </div>

          <div className="info-card">

            <div className="row">

              <FaWallet className="icon"/>

              <div>

                <span>

                  Montant

                </span>

                <h4>

                  {montant} FCFA

                </h4>

              </div>

            </div>

            <div className="row">

              <FaCalendarAlt className="icon"/>

              <div>

                <span>

                  Fin estimée

                </span>

                <h4>

                  {dateFin.toLocaleDateString("fr-FR")}

                </h4>

              </div>

            </div>

            <div className="row">

              <FaClock className="icon"/>

              <div>

                <span>

                  Temps restant

                </span>

                <h4>

                  {joursRestants} jour(s)

                </h4>

              </div>

            </div>

          </div>

        </div>

        <div

          className="status-card"

          style={{

            borderLeft: `8px solid ${couleur}`

          }}

        >

          <strong>

            {statut}

          </strong>

        </div>

        <button

          className="primary-btn"

          onClick={() => navigate("/tracking")}

        >

          <FaRedo/>

          Nouvelle recharge

        </button>

      </div>

      <BottomNav/>

    </div>

  );

}

export default Dashboard;