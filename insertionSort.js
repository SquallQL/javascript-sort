// For each element in a list, insert the element at the right index.
const insertionSort = arr => {
  // When the array has a length of 1,
  if (arr.length < 2) return arr;

  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    // In the inner loop, go through that array to find where the value belongs
    // and push it at the right index.
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }

    arr[j + 1] = currentVal;
  }

  return arr;
};

export default insertionSort;
