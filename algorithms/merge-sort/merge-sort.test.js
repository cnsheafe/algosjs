const { mergeSort } = require('./merge-sort')

let values = []

for (let i = 0; i < 100; i++) {
  values.push(Math.floor(Math.random(0, 100) * 100))
}

const sorted = mergeSort(values)
console.log(sorted)
console.log(sorted.length)