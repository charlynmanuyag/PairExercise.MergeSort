function split(wholeArray) {
  let len = wholeArray.length;
  if (len === 0) {
    return wholeArray;
  }
  let firstHalf = Math.ceil(len / 2);
  let [firstHalfArray, secondHalfArray] = [
    wholeArray.splice(0, firstHalf),
    wholeArray,
  ];
  return [firstHalfArray, secondHalfArray];
}

function merge(array1, array2) {
  let returnedArray = [];
  let i = 0;
  let j = 0;

  while (array1[i] && array2[j]) {
    let arr1Elem = array1[i];
    let arr2Elem = array2[j];
    if (arr1Elem < arr2Elem) {
      returnedArray.push(arr1Elem);
      i++;
    } else {
      returnedArray.push(arr2Elem);
      j++;
    }
  }
  //   return returnedArray;
  return returnedArray.concat(array1.slice(i)).concat(array2.slice(j));
}

function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  } else {
    let [left, right] = split(array);
    return merge(mergeSort(left), mergeSort(right));
  }
}

mergeSort([8, 7, 3, 1]);
