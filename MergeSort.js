function arrSplitter(arr) {
  if (arr.length > 1) {
    let midpoint = Math.floor(arr.length / 2)
    let arrLeft = arr.slice(0, midpoint)
    let arrRight = arr.slice(midpoint)
    let mergedLeft = arrSplitter(arrLeft)
    let mergedRight = arrSplitter(arrRight)

    return mergeSorter(mergedLeft, mergedRight)
  } else {
    return arr
  }
}

function mergeSorter(leftHalf, rightHalf) {
  let mergedArray = []
  let leftIndex = 0
  let rightIndex = 0

  while (leftHalf.length > leftIndex && rightHalf.length > rightIndex) {
    if (leftHalf[leftIndex] < rightHalf[rightIndex]) {
      mergedArray.push(leftHalf[leftIndex])
      leftIndex++
    } else {
      mergedArray.push(rightHalf[rightIndex])
      rightIndex++
    }
  }

  while (leftHalf.length > leftIndex) {
    mergedArray.push(leftHalf[leftIndex])
    leftIndex++
  }

  while (rightHalf.length > rightIndex) {
    mergedArray.push(rightHalf[rightIndex])
    rightIndex++
  }

  return mergedArray
}

let testArray = [10, 8, 6, 4, 2, 9, 7, 5, 3, 1]
let sortedArray = arrSplitter(testArray)
console.log(sortedArray)
module.exports = arrSplitter
