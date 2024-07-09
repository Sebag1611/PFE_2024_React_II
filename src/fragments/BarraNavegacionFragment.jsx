/* core */
import React, { useState } from "react";
import {Col, Nav, NavItem, NavLink} from "reactstrap"
/*view: component*/
function BarraNavegacionFragment({ setMenu, handleChangeMenuDestacado }) {

    return (
        <>
            <Col md="12" xs="12">
                <Nav pills className={"mt-2"}>
                    <NavItem>
                        <NavLink href="#" onClick={() => setMenu('inicio')}>
                            Inicio
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={handleChangeMenuDestacado}>
                            Destacados
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" onClick={() => setMenu('acercaDe')}>
                            Acerca de
                        </NavLink>
                    </NavItem>
                </Nav>
            </Col>
        </>
    )
}

/*exportacion*/
export default BarraNavegacionFragment