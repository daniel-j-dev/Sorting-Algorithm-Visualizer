const bubbleSort = (array, appContext) => {
  //"appContext for animations"
  let ani = [] //For animations
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
        ani.push(i) //For animations - indexs of the value we swapped - we only pass i because we know it swaps only with i+1
      }
    }
  }
  bubbleSortAnimations(ani, appContext) //For anmations
  return array
}

const bubbleSortAnimations = (ani, { values, setValues, settings }) => {
  let comparedItems = [0, 1]
  let tempArr = [...values]
  for (let i = 0; i < ani.length; i++) {
    let idx1 = ani[i]
    let idx2 = idx1 + 1
    setTimeout(() => {
      //Clear out old comparison colors
      document.getElementById(`${comparedItems[0]}`).style.backgroundColor =
        "#ffc600"
      document.getElementById(`${comparedItems[1]}`).style.backgroundColor =
        "#ffc600"

      //Change colors for current comparison items
      comparedItems = [idx1, idx2]
      document.getElementById(`${idx1}`).style.backgroundColor = "#90ee90"
      document.getElementById(`${idx2}`).style.backgroundColor = "#90ee90"
      ;[tempArr[idx1], tempArr[idx2]] = [tempArr[idx2], tempArr[idx1]]
      setValues([...tempArr])
      //If on last item of loop, change the last two comparison item's colors back to normal
      if (i === ani.length - 1) {
        document.getElementById(`${comparedItems[0]}`).style.backgroundColor =
          "#ffc600"
        document.getElementById(`${comparedItems[1]}`).style.backgroundColor =
          "#ffc600"
      }
    }, i * settings.AnimationSpeed)
  }
}

export default bubbleSort
