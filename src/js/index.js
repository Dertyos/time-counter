//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Counter } from "./component/counter.jsx"

//render your react application
let segundos = 0
let decenas = 0
let centenas = 0
let umil = 0
let dmil = 0
let cmil = 0


const tiempo = setInterval(() => {
    console.log(segundos)

    if (segundos > 9) {
        segundos = 0
        decenas++
        if (decenas > 9) {
            decenas = 0 
            centenas++
            if (centenas > 9) {
                centenas = 0 
                umil++
                if (umil > 9) {
                    umil = 0  
                    dmil++
                    if (dmil > 9) {
                        dmil = 0
                        cmil++;
                        if (cmil > 9) {
                            cmil = 0
                        }
                    }
                }
            }
        }
    }

    const parar = () => {
        clearInterval(tiempo)
    }

    
    ReactDOM.render(<Counter parar={parar} segundos={segundos} decenas={decenas} centenas={centenas} umil={umil} dmil={dmil} cmil={cmil} />, document.querySelector("#app"));
    segundos++
}, 1000)


