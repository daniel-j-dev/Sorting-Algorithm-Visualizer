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

  let tempArr = [...values]
  for (let i = 0; i < ani.length; i++) {
    let idx1 = ani[i]
    let idx2 = idx1 + 1
    setTimeout(() => {
      ;[tempArr[idx1], tempArr[idx2]] = [tempArr[idx2], tempArr[idx1]]
      setValues([...tempArr])
    }, i * settings.AnimationSpeed)
    //setValues([...tempArr])
  }
}

export default bubbleSort
