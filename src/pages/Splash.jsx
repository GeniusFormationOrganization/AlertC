import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../assets/logo.png";

import "../styles/splash.css";

function Splash(){

const navigate=useNavigate();

useEffect(()=>{

const timer=setTimeout(()=>{

navigate("/welcome");

},2500);

return()=>clearTimeout(timer);

},[]);

return(

<div className="splash">

<img

src={logo}

alt="AlertC"

className="logo"

/>

<h1>AlertC</h1>

<p>

Anticipez les coupures d'électricité

</p>

</div>

);

}

export default Splash;