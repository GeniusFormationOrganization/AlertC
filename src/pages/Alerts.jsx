import { useEffect, useState } from "react";
import {
  FaBell,
  FaExclamationTriangle,
  FaClock
} from "react-icons/fa";

import BottomNav from "../components/BottomNav";
import "../styles/alerts.css";

function Alerts() {

  const [alertes, setAlertes] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("alertes")) || [];

    setAlertes(data);

  }, []);

  return (

    <div className="alerts">

      <div className="alerts-container">

        <div className="alerts-header">

          <h1>

            <FaBell />

            Alertes

          </h1>

          <p>

            Consultez toutes les notifications importantes concernant votre crédit.

          </p>

        </div>

        {

          alertes.length === 0 ?

          (

            <div className="empty">

              <FaBell className="empty-icon"/>

              <h2>

                Aucune alerte

              </h2>

              <p>

                Les alertes apparaîtront automatiquement lorsqu'une recharge approchera de sa fin.

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

                <div className="alert-icon">

                  <FaExclamationTriangle/>

                </div>

                <div className="alert-content">

                  <h3>

                    {alerte.message}

                  </h3>

                  <div className="alert-date">

                    <FaClock/>

                    <span>

                      {alerte.date}

                    </span>

                  </div>

                </div>

              </div>

            ))

          )

        }

      </div>

      <BottomNav/>

    </div>

  );

}

export default Alerts;