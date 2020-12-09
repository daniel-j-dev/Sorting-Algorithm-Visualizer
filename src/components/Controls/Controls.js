import { useContext } from "react"
import appContext from "../../contexts/appContext"
import "./Controls.css"

function Controls() {
  const { values, setValues, settings, setSettings } = useContext(appContext)

  const sort = (algo) => {
    let newValues = [...values]
    algo(newValues, { values, setValues, settings })
    setSettings({
      ...settings,
      sorted: true,
    })
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

  return (
    <div id="Controls">
      <button onClick={() => randomizeArray()}>Randomize</button>
      <div id="speed-container">
        <label for="speed">Algo Speed</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(event) => adjustSpeed(event)}
          name="speed"
        />
      </div>
      <div id="size-container">
        <label for="size">Array Size</label>
        <input
          type="range"
          min="1"
          max="100"
          onChange={(event) => adjustArraySize(event)}
          name="size"
        />
      </div>
      <button
        disabled={settings.sorted}
        onClick={() => sort(settings.selectedAlgo)}
      >
        Sort
      </button>
    </div>
  )
}

export default Controls
