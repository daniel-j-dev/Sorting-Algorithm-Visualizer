import { useState, useEffect } from "react"
import AlgoVisual from "./components/AlgoVisual/AlgoVisual.js"
import CodeBlock from "./components/CodeBlock/CodeBlock.js"
import Controls from "./components/Controls/Controls.js"
import "./App.css"

function App() {
  const [appState, setAppState] = useState({
    settings: {
      arraySize: 75,
      maxValue: 500,
      hideCode: false,
    },
    values: [],
  })

  useEffect(() => {
    let tempValues = []
    for (let i = 0; i < appState.settings.arraySize; i++) {
      tempValues.push(randomInt())
    }
    setAppState({
      ...appState,
      values: [...tempValues]
    })
  }, [])

  const randomInt = () => {
    return Math.floor(Math.random() * appState.settings.maxValue)
  }

  return (
    <div className="App">
      <div id="upper">
        <CodeBlock />
        <AlgoVisual props={appState} />
      </div>
      <div id="lower">
        <Controls />
        {/* Add a "Hire me" button? */}
      </div>
    </div>
  )
}

export default App
