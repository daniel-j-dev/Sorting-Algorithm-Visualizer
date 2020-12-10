import { useContext } from "react"
import appContext from "../../contexts/appContext"
import "./CodeBlock.css"

function CodeBlock() {
  const { settings } = useContext(appContext)
  const algo = settings.selectedAlgo

  const bubbleSort = `const bubbleSort = array => {
    let swapped = true
    while (swapped) {
      swapped = false
      for (let i = 0; i < array.length; i++) {
        if (array[i] > array[i + 1]) {
          ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
          swapped = true
        }
      }
    }
    return array
  }`

  return (
    <div id="code-container">
      <div id="code-tab">
        <span>Source Code</span>
      </div>
      <code>{algo.name === "bubbleSort" ? bubbleSort : ""}</code>
    </div>
  )
}

export default CodeBlock
