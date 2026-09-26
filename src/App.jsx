import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import {} from './components/Productards'
import { Container } from 'react-bootstrap'
import ProductCard from './components/ProductCard'

function App() {
  return (
    <Container className="mt-4">
      <h1>Mi tienda React</h1>
      <ProductCard nombre="Teclado" precio={19990} />
      <ProductCard nombre="Mouse" precio={12990} />
    </Container>
  )
}

export default App

export default App
