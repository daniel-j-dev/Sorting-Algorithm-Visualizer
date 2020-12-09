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
    let newSpeed = 20 - (event.target.value / 100) * 20
    //(20) - ((Slider value as a %) * (20))
    //Slider at 100% = an animation delay of 0 millisecond
    //Slider at 0% = an animation delay of 20 millisecond

    setSettings({
      ...settings,
      AnimationSpeed: Math.round(newSpeed)
    })
  }

  return (
    <div id="Controls">
      <button onClick={() => settings.randomizeArray()}>Randomize</button>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(event) => adjustSpeed(event)}
      />
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
