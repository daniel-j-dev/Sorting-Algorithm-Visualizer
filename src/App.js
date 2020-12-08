import { useState, useEffect } from "react"
import AlgoVisual from "./components/AlgoVisual/AlgoVisual.js"
import CodeBlock from "./components/CodeBlock/CodeBlock.js"
import Controls from "./components/Controls/Controls.js"
import "./App.css"

function App() {
  const [settings, setSettings] = useState({
    arraySize: 75,
    maxValue: 500,
    hideCode: false,
    AnimationSpeed: 1000,
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
      <div id="upper">
        <CodeBlock />
        <AlgoVisual values={values} settings={settings} />
      </div>
      <div id="lower">
        <Controls
          values={values}
          setValues={setValues}
          settings={settings}
          setSettings={setSettings}
        />
        {/* Add a "Hire me" button? */}
      </div>
    </div>
  )
}

export default App
