const selectionSort = (array, appContext) => {
  //appContext for animations
  let ani = [] //For animations
  for (let i = 0; i < array.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
      ani.push([j, min, false]) //For animations
    }
    ;[array[i], array[min]] = [array[min], array[i]]
    ani.push([i, min, true]) //For animations
  }
  selectionSortAnimation(ani, appContext) //For animations
  return array
}

const selectionSortAnimation = (ani, { values, setValues, settings }) => {
  let lastItems = [0, 1]
  let tempArr = [...values]
  for (let i = 0; i < ani.length; i++) {
    let idx1 = ani[i][0],
      idx2 = ani[i][1]

    setTimeout(() => {
      //Clear out old colors
      document.getElementById(`${lastItems[0]}`).style.backgroundColor =
        "#90ee90"
      document.getElementById(`${lastItems[1]}`).style.backgroundColor =
        "#90ee90"

      //Change colors for current items

      lastItems = [idx1, idx2]

      if (ani[i][2] === true) {
        //If we swapped the compared items...just swap in this array
        ;[tempArr[idx1], tempArr[idx2]] = [tempArr[idx2], tempArr[idx1]] //swap
        setValues([...tempArr])
      } else {
        document.getElementById(`${idx1}`).style.backgroundColor = "#FF0000"
        document.getElementById(`${idx2}`).style.backgroundColor = "#FFFF00"
      }

      //If on last item of loop, change the last two item's colors back to normal
      if (i === ani.length - 1) {
        document.getElementById(`${lastItems[0]}`).style.backgroundColor =
          "#90ee90"
        document.getElementById(`${lastItems[1]}`).style.backgroundColor =
          "#90ee90"
      }
    }, i * settings.AnimationSpeed)
  }
}

export default selectionSort
