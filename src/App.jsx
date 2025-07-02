import { useState } from 'react'
import './App.css'
import Header from './layout/Header';
import Layout from './layout/Layout';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Layout />
    </>
  )
}

export default App
