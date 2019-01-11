// Iterate through the entire list and check adjacent elements.
// For each element that is smaller, swap. Repeat this process until sorted.
const bubbleSort = arr => {
  // Swap 2 values using temp variable for reference
  function swap(index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    // If no swap was found during a cycle, it means the data is already sorted.
    let noSwap = true;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }

  return arr;
};

export default bubbleSort;
