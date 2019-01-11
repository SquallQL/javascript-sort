const selectionSort = arr => {
  function swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }
  // For each iteration, find the lowers number and position it at the beginning
  // of the array.
  for (let i = 0; i < arr.length - 1; i++) {
    let minValueIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minValueIndex] > arr[j]) {
        minValueIndex = j;
      }
    }
    swap(i, minValueIndex);
  }

  return arr;
};

export default selectionSort;
