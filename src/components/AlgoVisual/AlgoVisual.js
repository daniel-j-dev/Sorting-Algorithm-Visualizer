import { useContext } from "react"
import appContext from "../../contexts/appContext"
import "./AlgoVisual.css"

function AlgoVisual() {
  const { values, setValues, settings, setSettings } = useContext(appContext)

  return (
    <div id="AlgoVisual">
      {values.map((val, index) => (
        <div
          className="value"
          key={index}
          id={index}
          style={{ height: `${(val / settings.maxValue) * 100}%` }} 
          //Determining what a bar's height is by what % it is of the maximum value^
        ></div>
      ))}
    </div>
  )
}

export default AlgoVisual
