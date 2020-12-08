import bubbleSort from "../../algorithms/bubbleSort"
import "./Controls.css"

function Controls({ values, setValues, settings, setSettings }) {
  const sort = (algo) => {
    let newValues = [...values]
    algo(newValues)
    setValues([...newValues])
  }

  return <div id="Controls">
    <button onClick={() => sort(bubbleSort)}>Bubble Sort</button>
  </div>
}

export default Controls
