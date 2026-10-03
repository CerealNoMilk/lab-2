

import './App.css';
import data from "./data/data";

import ResortsContainer from './Components/ResortsContainer'

function App() {
  return (
    <>
     <h1>Resorts Lite</h1>
     <ResortsContainer data={data} />
    </>
  )
}

export default App
