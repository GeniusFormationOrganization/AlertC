import { useEffect, useState } from "react";
import {
  FaWallet,
  FaCalendarAlt,
  FaClock,
  FaHistory
} from "react-icons/fa";

import BottomNav from "../components/BottomNav";
import "../styles/history.css";

function History() {

  const [historique, setHistorique] = useState([]);

  useEffect(() => {

    const data =
      JSON.parse(localStorage.getItem("historique")) || [];

    setHistorique(data);

  }, []);

  return (

    <div className="history">

      <div className="history-container">

        <div className="history-header">

          <h1>

            <FaHistory />

            Historique

          </h1>

          <p>

            Consultez toutes vos anciennes recharges.

          </p>

        </div>

        {

          historique.length === 0 ?

          (

            <div className="empty">

              <FaHistory className="empty-icon"/>

              <h2>

                Aucun historique

              </h2>

              <p>

                Vos prochaines recharges apparaîtront ici.

              </p>

            </div>

          )

          :

          (

            historique.map((item,index)=>(

              <div

                className="history-card"

                key={index}

              >

                <div className="history-item">

                  <div className="icon-box">

                    <FaWallet/>

                  </div>

                  <div>

                    <span>Montant</span>

                    <h3>

                      {item.montant} FCFA

                    </h3>

                  </div>

                </div>

                <div className="history-item">

                  <div className="icon-box">

                    <FaCalendarAlt/>

                  </div>

                  <div>

                    <span>Date</span>

                    <h3>

                      {item.date}

                    </h3>

                  </div>

                </div>

                <div className="history-item">

                  <div className="icon-box">

                    <FaClock/>

                  </div>

                  <div>

                    <span>Heure</span>

                    <h3>

                      {item.heure}

                    </h3>

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

export default History;