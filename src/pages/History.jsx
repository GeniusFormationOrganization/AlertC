import { useEffect, useState } from "react";
import { FaWallet, FaCalendarAlt } from "react-icons/fa";
import BottomNav from "../components/BottomNav";
import "../styles/history.css";

function History() {

  const [historique, setHistorique] = useState([]);

  useEffect(() => {

    const data = JSON.parse(localStorage.getItem("historique")) || [];

    setHistorique(data);

  }, []);

  return (

    <div className="history">

      <h1>📈 Historique</h1>

      <p className="subtitle">
        Toutes vos anciennes recharges.
      </p>

      {

        historique.length === 0 ?

        (

          <div className="empty">

            <h2>Aucune recharge enregistrée</h2>

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

              <div className="history-row">

                <FaWallet className="icon"/>

                <div>

                  <span>Montant</span>

                  <h3>{item.montant} FCFA</h3>

                </div>

              </div>

              <div className="history-row">

                <FaCalendarAlt className="icon"/>

                <div>

                  <span>Date</span>

                  <h3>{item.date}</h3>

                </div>

              </div>

            </div>

          ))

        )

      }

      <BottomNav/>

    </div>

  );

}

export default History;