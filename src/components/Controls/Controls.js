import { useContext } from "react"
import appContext from "../../contexts/appContext"
import "./Controls.css"

import bubbleSort from "../../algorithms/bubbleSort"
import selectionSort from "../../algorithms/selectionSort"
import mergeSort from "../../algorithms/mergeSort"

function Controls() {
  const { values, setValues, settings, setSettings } = useContext(appContext)

  const sort = (algo) => {
    if (settings.sorting) {
      //If already sorting, stop!
      //Clear out all animation setTimeout() instances
      for (let i = 0; i < settings.aniSteps.length; i++) {
        clearTimeout(settings.aniSteps[i])
      }
      //...and change state so that styles update
      setSettings({
        ...settings,
        sorting: false,
      })
    } else {
      //Else, we'll sort!
      let newValues = [...values]
      setSettings({
        ...settings,
        sorting: true,
      })
      algo(newValues, { values, setValues, settings, setSettings })
    }
  }

  const adjustSpeed = (event) => {
    let newSpeed = 15 - (event.target.value / 100) * 15
    //(15) - ((Slider value as a %) * (15))
    //Slider at 100% = an animation delay of 0 millisecond
    //Slider at 0% = an animation delay of 15 millisecond

    setSettings({
      ...settings,
      AnimationSpeed: Math.round(newSpeed),
    })
  }

  const adjustArraySize = (event) => {
    const newSize = event.target.value * 2 //Up to 200 items
    setSettings({
      ...settings,
      arraySize: newSize,
    })
  }

  const randomizeArray = () => {
    setSettings({
      ...settings,
      randomizeArray: settings.randomizeArray + 1,
    })
  }

  const changeAlgo = (algoFunc) => {
    setSettings({
      ...settings,
      selectedAlgo: algoFunc,
    })
  }

  return (
    <div id="controls">
      <span id="controls-tab">Control Panel</span>
      <div id="controls-interface">
        <div id="sliders-container">
          <div id="speed-container">
            <input
              type="range"
              min="1"
              max="100"
              onChange={(event) => adjustSpeed(event)}
              name="speed"
              disabled={settings.sorting}
            />
            <label htmlFor="speed">Algo Speed</label>
          </div>
          <div id="size-container">
            <input
              type="range"
              min="1"
              max="100"
              onChange={(event) => adjustArraySize(event)}
              name="size"
              disabled={settings.sorting}
            />
            <label htmlFor="size">Array Size</label>
          </div>
        </div>
        <div id="algos-container">
          <button
            className={`algo ${
              settings.selectedAlgo.name === "mergeSort" ? "selected" : ""
            }`}
            onClick={() => changeAlgo(mergeSort)}
            disabled={settings.sorting}
          >
            Merge Sort
          </button>
          <button
            className={`algo ${
              settings.selectedAlgo.name === "selectionSort" ? "selected" : ""
            }`}
            onClick={() => changeAlgo(selectionSort)}
            disabled={settings.sorting}
          >
            Selection Sort
          </button>
          <button
            className={`algo ${
              settings.selectedAlgo.name === "bubbleSort" ? "selected" : ""
            }`}
            onClick={() => changeAlgo(bubbleSort)}
            disabled={settings.sorting}
          >
            Bubble Sort
          </button>
        </div>
        <div id="sort-rand-container">
          <button
            id="sort"
            disabled={settings.sorted}
            onClick={() => sort(settings.selectedAlgo)}
            className={settings.sorting ? "stop" : ""}
          >
            {settings.sorting ? "Stop" : "Sort"}
          </button>
          <button
            id="randomize"
            onClick={() => randomizeArray()}
            disabled={settings.sorting}
          >
            Randomize
          </button>
        </div>
      </div>
    </div>
  )
}

export default Controls
