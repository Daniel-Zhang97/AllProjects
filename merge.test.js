const mergeSort = require('./MergeSort')

describe('mergeSorter', () => {
  it('empty array', () => {
    const array = []
    const sortedArray = mergeSort(array)
    expect(sortedArray).toEqual([])
  })

  it('array with one element', () => {
    const array = [5]
    const sortedArray = mergeSort(array)
    expect(sortedArray).toEqual([5])
  })

  it('array with odd numbered elements', () => {
    const array = [9, 3, 7, 1, 5]
    const sortedArray = mergeSort(array)
    expect(sortedArray).toEqual([1, 3, 5, 7, 9])
  })

  it('array with duplicate elements', () => {
    const array = [5, 2, 8, 2, 5]
    const sortedArray = mergeSort(array)
    expect(sortedArray).toEqual([2, 2, 5, 5, 8])
  })

  it('large array', () => {
    const array = [10, 8, 6, 4, 2, 9, 7, 5, 3, 1]
    const sortedArray = mergeSort(array)
    expect(sortedArray).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})
