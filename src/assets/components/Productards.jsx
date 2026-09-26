import { useState } from 'react'
import { Card, Button } from 'react-bootstrap'

function ProductCard(props) {

const [cantidad, setCantidad] = useState(0)

function agregar() {

setCantidad(cantidad + 1)

}
return (
    
<Card className="mb-3">
DSY1104 · Desarrollo Fullstack II
Material preparado para docencia · React + Vite
<Card.Body>
<Card.Title>{props.nombre}</Card.Title>
<Card.Text>Precio: ${props.precio}</Card.Text>
<Card.Text>Cantidad: {cantidad}</Card.Text>
<Button onClick={agregar}>Agregar</Button>
</Card.Body>
</Card>
)
}
export default ProductCard