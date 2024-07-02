/* core:React, Reactstrap */
import React from "react"
import { Button, Card, CardTitle, CardText } from "reactstrap"

/*Component: view*/
function ContenidoInicioFragment() {
    return (
        <>
            <Card body>
                <CardTitle tag="h5">
                    Inicio
                </CardTitle>
                <CardText>
                    Esto es un fragmento de card de inicio
                </CardText>
                <Button>
                    Go somewhere
                </Button>
            </Card>
        </>
    )
}

/*Exportar*/
export default ContenidoInicioFragment