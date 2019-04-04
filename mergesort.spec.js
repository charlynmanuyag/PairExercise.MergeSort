describe('Split array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([])).toEqual([]);
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
    expect(split([1, 2, 3, 4, 5])).toEqual([[1, 2, 3], [4, 5]]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(merge([4, 7], [2, 8])).toEqual([2, 4, 7, 8]);
    expect(merge([1, 3, 4], [2, 9])).toEqual([1, 2, 3, 4, 9]);
    expect(merge([1, 3, 4], [2, 9, 10, 11, 12, 13])).toEqual([
      1,
      2,
      3,
      4,
      9,
      10,
      11,
      12,
      13,
    ]);
  });
});

describe('Merge Sort function', function() {
  it('is able to merge and sort the array given', function() {
    expect(mergeSort([])).toEqual([]);
    expect(mergeSort([1])).toEqual([1]);
    expect(mergeSort([1, 7, 2, 9, 3])).toEqual([1, 2, 3, 7, 9]);
    expect(mergeSort([8, 7, 3, 1])).toEqual([1, 3, 7, 8]);
  });
});
