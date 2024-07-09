/*Core*/
import React, {useState} from "react";
import {Col} from "reactstrap";

/*Importaciones*/
import ContenidoInicioFragment from "./fragments/ContenidoInicioFragment.jsx";

/*view: component*/
function Inicio() {

    return (
        <>
            <Col md="12" xs="12">
                <ContenidoInicioFragment />
            </Col>
        </>
    )
}

/*Exportarlo*/
export default Inicio