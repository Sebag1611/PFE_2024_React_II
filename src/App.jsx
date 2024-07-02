/* Core */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Container,
    Col,
    Nav,
    NavItem,
    NavLink,
    Row
} from 'reactstrap'

/*Importaciones*/
import ContenidoInicioFragment from "./fragments/ContenidoInicioFragment"

/*Component:view*/
function App() {
  return (
    <>
      <Container className="border">
        <Row>
            <Col md="12" xs="12">
                <Nav pills className={"mt-2"}>
                    <NavItem>
                        <NavLink
                            active
                            href="#"
                        >
                            Link
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            Link
                        </NavLink>
                    </NavItem>
                </Nav>
            </Col>
        </Row>
        <Row className="mt-2">
            <Col md="12" xs="12">
                <ContenidoInicioFragment />
            </Col>
        </Row>
      </Container>
    </>
  )
}

export default App
