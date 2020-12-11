const mergeSort = (array, appContext) => {
  //This function is a wrapper to help with logging animation steps
  let ani = []
  let newArr = []
  for (let i = 0; i < array.length; i++) {
    //Adds the array item along with it's original index - by doing so it keeps track of the index throughout the merging process
    newArr.push({
      value: array[i],
      index: i,
    })
  }
  let result = mergeSortReal(newArr, ani)
  let finalArr = []
  for (let i = 0; i < result.length; i++) {
    //This loop gets rid of the index tracking to return the result in the end
    finalArr.push(result[i].value)
  }
  mergeSortAnimation(ani, appContext)
  return finalArr
}

const mergeSortReal = (array, ani) => {
  if (array.length === 1) return array

  let array1 = array.slice(0, Math.floor(array.length / 2))
  let array2 = array.slice(array1.length)

  array1 = mergeSortReal(array1, ani)
  array2 = mergeSortReal(array2, ani)

  return merge(array1, array2, ani)
}

const merge = (array1, array2, ani) => {
  let tmpArr = []
  while (array1.length > 0 && array2.length > 0) {
    ani.push({
      index1: array1[0].index,
      index2: array2[0].index,
      swap: false,
      push: false,
    })
    if (array1[0].value > array2[0].value) {
      tmpArr.push(array2[0])
      ani.push({
        index1: array1[0].index,
        index2: array2[0].index,
        swap: true,
        push: false,
      })
      array2.shift()
    } else {
      tmpArr.push(array1[0])
      ani.push({
        index1: array1[0].index,
        index2: array2[0].index,
        swap: true,
        push: false,
      })
      array1.shift()
    }
  }

  while (array1.length > 0) {
    tmpArr.push(array1[0])
    ani.push({
      index1: array1[0].index,
      index2: null,
      swap: false,
      push: true,
    })
    array1.shift()
  }

  while (array2.length > 0) {
    tmpArr.push(array2[0])
    ani.push({
      index1: array2[0].index,
      index2: null,
      swap: false,
      push: true,
    })
    array2.shift()
  }
  return tmpArr
}

//console.log(mergeSort([7, 4, 1, 2, 5, 8, 9, 6, 3]))

const mergeSortAnimation = (ani, appContext) => {
    console.log(ani)
}

export default mergeSort