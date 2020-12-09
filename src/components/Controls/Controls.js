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

  return (
    <div id="Controls">
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
