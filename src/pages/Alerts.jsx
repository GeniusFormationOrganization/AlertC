import { useEffect, useState } from "react";
import { FaBell } from "react-icons/fa";
import BottomNav from "../components/BottomNav";
import "../styles/alerts.css";

function Alerts() {

  const [alertes, setAlertes] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("alertes")) || [];

    setAlertes(data);

  }, []);

  return (

    <div className="alerts">

      <h1>🔔 Alertes</h1>

      <p className="subtitle">

        Retrouvez ici toutes les alertes reçues.

      </p>

      {

        alertes.length === 0 ?

        (

          <div className="empty">

            <FaBell className="empty-icon"/>

            <h2>Aucune alerte</h2>

            <p>

              Les alertes apparaîtront ici lorsqu'elles seront déclenchées.

            </p>

          </div>

        )

        :

        (

          alertes.map((alerte,index)=>(

            <div
              className="alert-card"
              key={index}
            >

              <FaBell className="bell"/>

              <div>

                <h3>{alerte.message}</h3>

                <span>{alerte.date}</span>

              </div>

            </div>

          ))

        )

      }

      <BottomNav/>

    </div>

  );

}

export default Alerts;