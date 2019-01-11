// Break a list of number into array of length 1, then recombine them all together
// in the right order.
const mergeSort = userArray => {
  // Define mergeSortedArrays function to merge two sorted array
  function mergeSortedArrays(arr1, arr2) {
    const sortedArray = [];
    // Define two index values, one per array
    let i = 0;
    let j = 0;

    while (i < arr1.length || j < arr2.length) {
      // If one array is empty, just push all the values of the remaining array
      if (j >= arr2.length) {
        sortedArray.push(arr1[i]);
        i++;
      } else if (i >= arr1.length) {
        sortedArray.push(arr2[j]);
        j++;
      }
      // Compare the values of each array and always push the smaller one
      else if (arr1[i] < arr2[j]) {
        sortedArray.push(arr1[i]);
        i++;
      } else {
        sortedArray.push(arr2[j]);
        j++;
      }
    }

    return sortedArray;
  }

  // Divide the array into smaller arrays until each array is either of length
  // 1 or 0
  if (userArray.length <= 1) return userArray;

  const mid = Math.floor(userArray.length / 2);

  // Recursively call the smaller halves
  const left = mergeSort(userArray.slice(0, mid));
  const right = mergeSort(userArray.slice(mid));

  // Merge the left and right arrays
  return mergeSortedArrays(left, right);
};

export default mergeSort;
