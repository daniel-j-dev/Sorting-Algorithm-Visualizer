// In-place merge sort

//We need to retain the index of items for the sake of animating the chart
// Method to retain the index when doing Merge Sort:

// 1. Make one temp array copy and break it down into individual pieces through recursion with pointers instead of new arrays
// 2. Merge the individual pieces into the original array

const mergeSort = (array, appContext) => {
  //An enclosing function that helps with both Merge Sort and handlding animations.
  //appContext is just for animate()
  if (array.length <= 1) return array
  let ani = [] //For animations
  let tmpArr = [...array]
  divide(array, 0, array.length - 1, tmpArr, ani)
  animate(ani, appContext)
  return array
}

const divide = (array, startX, endX, tmpArr, ani) => {
  if (startX === endX) return
  const middleX = Math.floor((startX + endX) / 2)
  divide(tmpArr, startX, middleX, array, ani)
  divide(tmpArr, middleX + 1, endX, array, ani)
  conquer(array, startX, middleX, endX, tmpArr, ani)
}

const conquer = (array, startX, middleX, endX, tmpArr, ani) => {
  let k = startX
  let i = startX
  let j = middleX + 1
  while (i <= middleX && j <= endX) {
    if (tmpArr[i] <= tmpArr[j]) {
      //animate the value change...
      ani.push({
        index: k,
        newVal: tmpArr[i],
      })
      array[k++] = tmpArr[i++]
    } else {
      //animate the value change...
      ani.push({
        index: k,
        newVal: tmpArr[j],
      })
      array[k++] = tmpArr[j++]
    }
  }
  while (i <= middleX) {
    //animate the value change...
    ani.push({
      index: k,
      newVal: tmpArr[i],
    })
    array[k++] = tmpArr[i++]
  }
  while (j <= endX) {
    //animate the value change...
    ani.push({
      index: k,
      newVal: tmpArr[j],
    })
    array[k++] = tmpArr[j++]
  }
}

const animate = (ani, { values, setValues, settings }) => {
  let lastItems = [0, 1]
  let tmpArr = [...values]
  for (let i = 0; i < ani.length; i++) {
    let item = ani[i]
    setTimeout(() => {
      //Clear out old comparison colors
      document.getElementById(`${lastItems[0]}`).style.backgroundColor =
        "#90ee90"
      document.getElementById(`${lastItems[1]}`).style.backgroundColor =
        "#90ee90"

      //Style bars that are being updated in the array
      lastItems = [item.index, item.index]
      document.getElementById(`${item.index}`).style.backgroundColor = "#ffc600"
      //Execute changes on temp array then update app state
      tmpArr[item.index] = item.newVal
      setValues([...tmpArr])

      //If on last item of loop, change the last two comparison item's colors back to normal
      if (i === ani.length - 1) {
        document.getElementById(`${lastItems[0]}`).style.backgroundColor =
          "#90ee90"
        document.getElementById(`${lastItems[1]}`).style.backgroundColor =
          "#90ee90"
      }
    }, i * settings.AnimationSpeed)
  }
}

export default mergeSort
