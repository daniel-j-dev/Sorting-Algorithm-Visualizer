const selectionSort = (array, appContext) => {
  //appContext for animations
  let ani = [] //For animations
  for (let i = 0; i < array.length - 1; i++) {
    let min = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) min = j
      ani.push([j, min]) //For animations
    }
    ;[array[i], array[min]] = [array[min], array[i]]
  }
  selectionSortAnimation(ani, appContext) //For animations
  return array
}

const selectionSortAnimation = (ani, { values, setValues, settings }) => {
  return null
}

export default selectionSort
