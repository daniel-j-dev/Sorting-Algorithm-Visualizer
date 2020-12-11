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

  const selectionSort = `const selectionSort = array => {
    for (let i = 0; i < array.length - 1; i++) {
      let min = i
      for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[min]) min = j
      }
      ;[array[i], array[min]] = [array[min], array[i]]
    }
    return array
  }`

  const mergeSort = ``

  return (
    <div id="code-container">
      <div id="code-tab">
        <span>Source Code</span>
      </div>
      {(algo.name === "bubbleSort" ? <code>{bubbleSort}</code> : "")}
      {(algo.name === "selectionSort" ? <code>{selectionSort}</code> : "")}
      {(algo.name === "mergeSort" ? <code>{mergeSort}</code> : "")}
    </div>
  )
}

export default CodeBlock
