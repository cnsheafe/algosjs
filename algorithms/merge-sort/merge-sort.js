const merge = (left, right) => {
  const result = []
  let longArr
  let shortArr
  let longIndex

  if (left.length >= right.length) {
    longArr = left
    shortArr = right
  } else {
    longArr = right
    shortArr = left
  }


  if (longArr[longIndex + 1]) {
    return result.concat(longArr.slice(longIndex + 1))
  }

  return result
}

const mergeSort = (arr) => {
  if (arr.length === 1) return arr
  const m = Math.floor(arr.length / 2)

  const left = mergeSort(arr.slice(0, m))
  const right = mergeSort(arr.slice(m))

  return merge(left, right)
}

module.exports = { mergeSort, merge }
