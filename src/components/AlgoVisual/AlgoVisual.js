import "./AlgoVisual.css"

function AlgoVisual({ props }) {
  const { values, settings } = props
  return (
    <div id="AlgoVisual">
      {values.map((item, index) => (
        <div className='value' key={index}>i</div>
      ))}
    </div>
  )
}

export default AlgoVisual
