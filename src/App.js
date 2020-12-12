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
    arraySize: 100,
    maxValue: 1000,
    hideCode: false,
    AnimationSpeed: 7, //Measured in MS delay per action
    selectedAlgo: bubbleSort,
    sorting: false,
    sorted: false,
    randomizeArray: 0,
    //Passing the randomizeArray function itself was causing problems so I set this variable as a dependancy to useEffect
    //Just changing this value will force the array to randomize
    aniSteps: [], //The array is used to clear instances of setTimeout to "stop" animations
  })

  const [values, setValues] = useState([])

  useEffect(() => {
    randomizeArray()
  }, [settings.randomizeArray, settings.arraySize])

  return (
    <div className="App">
      <appContext.Provider value={{ values, setValues, settings, setSettings }}>
        <div id="upper">
          <AlgoVisual />
        </div>
        <div id="lower">
          <CodeBlock />
          <Controls />
          {/* Add a "Hire me" button? */}
        </div>
      </appContext.Provider>
    </div>
  )
}

export default App
