import { useState, useEffect } from "react"
import appContext from "./contexts/appContext"
import AlgoVisual from "./components/AlgoVisual/AlgoVisual"
import CodeBlock from "./components/CodeBlock/CodeBlock"
import Controls from "./components/Controls/Controls"
import "./App.css"

import bubbleSort from "./algorithms/bubbleSort"

function App() {
  const randomizeArray = () => {
    const randomInt = () => {
      return Math.floor(Math.random() * settings.maxValue)
    }
    let tempValues = []
    for (let i = 0; i < settings.arraySize; i++) {
      tempValues.push(randomInt())
    }
    setValues([...tempValues])
    setSettings({
      ...settings,
      sorted: false,
    })
  }

  const [settings, setSettings] = useState({
    arraySize: 150,
    maxValue: 1000,
    hideCode: false,
    AnimationSpeed: 5, //Measured in MS delay per action
    selectedAlgo: bubbleSort,
    sorted: false,
    randomizeArray: randomizeArray,
  })

  const [values, setValues] = useState([])

  useEffect(() => {
    randomizeArray()
  }, [])

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
