import { useContext } from "react"
import appContext from "../../contexts/appContext"
import "./AlgoVisual.css"

function AlgoVisual() {
  const { values, setValues, settings, setSettings } = useContext(appContext)

  return (
    <div id="AlgoVisual">
      {values.map((val, index) => (
        <div className="value" key={index} style={{ height: `${val}%` }}></div>
      ))}
    </div>
  )
}

export default AlgoVisual
