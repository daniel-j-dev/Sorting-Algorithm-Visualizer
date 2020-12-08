const bubbleSort = (array) => {
  let swapped = true
  while (swapped) {
    swapped = false
    for (let i = 0; i < array.length; i++) {
      if (array[i] > array[i + 1]) {
        ;[array[i], array[i + 1]] = [array[i + 1], array[i]]
        swapped = true
      }
    }
  }
  return array
}

export default bubbleSort
