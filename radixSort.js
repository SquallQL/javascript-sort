const radixSort = numbers => {
  let tempNumbers = numbers;
  // Loop the same amount of time than the number of digits in the biggest number
  for (let i = 0; i < mostDigits(tempNumbers); i++) {
    let container = {};

    for (let j = 0; j < tempNumbers.length; j++) {
      let key = getDigit(tempNumbers[j], i);
      // Check the [i] digit of tempNumbers[j] and push it in the container at the right position
      if (!(key in container)) container[key] = [];
      container[key].push(tempNumbers[j]);
    }
    // Purge the container and concatenate all the arrays together. This array will be used to call
    // the next iteration
    tempNumbers = [];

    // Concats all the arrays;
    for (let prop in container) {
      tempNumbers = tempNumbers.concat(container[prop]);
    }
  }

  return tempNumbers;

  /* --------------- Utility functions --------------- */
  function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
  }

  function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
  }

  function mostDigits(numbers) {
    let maxDigits = 0;

    numbers.forEach(num => {
      maxDigits = Math.max(maxDigits, digitCount(num));
    });

    return maxDigits;
  }
};

export default radixSort;
