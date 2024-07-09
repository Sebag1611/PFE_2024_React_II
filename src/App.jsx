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
import Inicio from "./Inicio.jsx";
import Destacados from "./Destacados.jsx";
import AcercaDe from "./AcercaDe.jsx";

/*Component:view*/
function App() {
    const [menu, setMenu] = useState('inicio') // 'Inicio' - 'Destacado'

    const handleChangeMenuDestacado = () => {
        setMenu('destacado')
    }

  return (
    <>
      <Container className="border">
        <Row>
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
        </Row>
        <Row className="mt-2">
            {/* condition rendering */}
            {menu === 'inicio' &&
                <>
                    <Inicio/>
                </>
            }
            {menu === 'destacados' &&
                <>
                    <Destacados/>
                </>
            }
            {menu === 'acercaDe' &&
                <>
                    <AcercaDe/>
                </>
            }
        </Row>
      </Container>
    </>
  )
}

export default App
