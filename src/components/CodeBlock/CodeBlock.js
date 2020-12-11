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

  const mergeSort = `const mergeSort = array => {
    if (array.length === 1) return array
  
    let array1 = array.slice(0, Math.floor(array.length / 2))
    let array2 = array.slice(array1.length)
  
    array1 = mergeSort(array1)
    array2 = mergeSort(array2)
  
    return merge(array1, array2)
  }
  
  const merge = (array1, array2) => {
    let tmpArr = []
    while (array1.length > 0 && array2.length > 0) {
      if (array1[0] > array2[0]) {
        tmpArr.push(array2[0])
        array2.shift()
      } else {
        tmpArr.push(array1[0])
        array1.shift()
      }
      console.log(tmpArr)
    }
  
    while (array1.length > 0) {
      tmpArr.push(array1[0])
      array1.shift()
    }
  
    while (array2.length > 0) {
      tmpArr.push(array2[0])
      array2.shift()
    }
    return tmpArr
  }`

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
