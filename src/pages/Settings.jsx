import { useTheme } from "../context/ThemeContext";
import BottomNav from "../components/BottomNav";
import "../styles/settings.css";

function Settings() {

  const { darkMode, toggleTheme } = useTheme();

  function reinitialiser() {

    const confirmation = window.confirm(
      "Voulez-vous vraiment supprimer toutes les données ?"
    );

    if (!confirmation) return;

    localStorage.removeItem("montant");
    localStorage.removeItem("jours");
    localStorage.removeItem("dateRecharge");
    localStorage.removeItem("historique");
    localStorage.removeItem("alertes");

    alert("Les données ont été supprimées.");

  }

  return (

    <div className="settings">

      <h1>⚙ Paramètres</h1>

      <div className="setting-card">

        <div className="setting">

          <div>

            <h3>🌙 Mode sombre</h3>

            <p>Activer le thème sombre.</p>

          </div>

          <label className="switch">

            <input
              type="checkbox"
              checked={darkMode}
              onChange={toggleTheme}
            />

            <span className="slider"></span>

          </label>

        </div>

      </div>

      <div className="setting-card">

        <div className="setting">

          <div>

            <h3>🔔 Notifications</h3>

            <p>Disponible dans une prochaine version.</p>

          </div>

        </div>

      </div>

      <div className="setting-card">

        <div className="setting">

          <div>

            <h3>♻ Réinitialiser</h3>

            <p>Supprimer toutes les données enregistrées.</p>

          </div>

          <button
            className="reset-btn"
            onClick={reinitialiser}
          >
            Effacer
          </button>

        </div>

      </div>

      <div className="setting-card">

        <div className="setting">

          <div>

            <h3>ℹ À propos</h3>

            <p>AlertC Version 1.0</p>

          </div>

        </div>

      </div>

      <BottomNav/>

    </div>

  );

}

export default Settings;