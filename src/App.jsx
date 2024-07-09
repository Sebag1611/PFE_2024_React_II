/* Core */
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import {
    Container,
    Row
} from 'reactstrap'

/*Importaciones*/
import Inicio from "./Inicio.jsx"
import Destacados from "./Destacados.jsx"
import AcercaDe from "./AcercaDe.jsx"
import BarraNavegacionFragment from "./fragments/BarraNavegacionFragment.jsx";


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
            <BarraNavegacionFragment
                setMenu={setMenu}
                handleChangeMenuDestacado={handleChangeMenuDestacado}
            />
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
