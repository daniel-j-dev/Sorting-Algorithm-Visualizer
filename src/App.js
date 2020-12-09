import { useState, useEffect } from "react"
import appContext from "./contexts/appContext"
import AlgoVisual from "./components/AlgoVisual/AlgoVisual"
import CodeBlock from "./components/CodeBlock/CodeBlock"
import Controls from "./components/Controls/Controls"
import "./App.css"

import bubbleSort from "./algorithms/bubbleSort"

function App() {
  const [settings, setSettings] = useState({
    arraySize: 150,
    maxValue: 100,
    hideCode: false,
    AnimationSpeed: 5,
    selectedAlgo: bubbleSort,
    sorted: false,
  })

  const [values, setValues] = useState([])

  useEffect(() => {
    let tempValues = []
    for (let i = 0; i < settings.arraySize; i++) {
      tempValues.push(randomInt())
    }
    setValues([...tempValues])
  }, [])

  const randomInt = () => {
    return Math.floor(Math.random() * settings.maxValue)
  }

  return (
    <div className="App">
      <appContext.Provider value={{ values, setValues, settings, setSettings }}>
        <div id="upper">
          <CodeBlock />
          <AlgoVisual />
        </div>
        <div id="lower">
          <Controls />
          {/* Add a "Hire me" button? */}
        </div>
      </appContext.Provider>
    </div>
  )
}

export default App
