import "./AlgoVisual.css"

function AlgoVisual({ values, settings }) {
  return (
    <div id="AlgoVisual">
      {values.map((item, index) => (
        <div className="value" key={index}></div>
      ))}
    </div>
  )
}

export default AlgoVisual
