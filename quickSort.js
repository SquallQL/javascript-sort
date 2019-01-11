const quickSort = (arr, left = 0, right = arr.length - 1) => {
  function pivot(arr, start = 0, end = arr.length - 1) {
    // Function to swap 2 values
    function swap(arr, i, j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }

    const pivot = arr[start];
    // Declare the index that will be used when swapping position
    let swapIndex = start;

    for (let i = start + 1; i < arr.length; i++) {
      // When the element is smaller, swap it to index variable
      // and increment the index
      if (pivot > arr[i]) {
        swapIndex++;
        swap(arr, swapIndex, i);
      }
    }

    swap(arr, start, swapIndex);

    return swapIndex;
  }
  // Call the helper function pivot on the base Array
  const swapIndex = pivot(arr, left, right);

  // Define the base case: subarray is of length less than 2
  if (left < right) {
    quickSort(arr, left, swapIndex - 1);
    quickSort(arr, swapIndex + 1, right);
  }

  return arr;
};

export default quickSort;
