import { faClock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React from "react"

export const Reloj = () => {
    return (
        <div className="container text-center shadow-sm d-flex justify-content-center align-items-center rounded-1 mt-4 contenedores" style={{height: "400px"}}>
            <div className="row align-items-center">
                <div className="col-md-3 tamañoDelNumero"><FontAwesomeIcon icon={faClock} />
                </div>
            </div>
        </div>
    )
}