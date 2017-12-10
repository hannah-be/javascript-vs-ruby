function formatOrdinal(number) {
  const elevensies = number % 100
  if (elevensies === 11 || elevensies === 12 || elevensies === 13) {
    return `${number}th`
  }

  const digit = number % 10
  switch (digit) {
    case 1:
      return `${number}st`
    case 2:
      return `${number}nd`
    case 3:
      return `${number}rd`
    default:
      return `${number}th`
  }
}

for (let n = 1; n <= 25; n++) {
  console.log(formatOrdinal(n))
}

console.log(formatOrdinal(100))
console.log(formatOrdinal(111))
console.log(formatOrdinal(221))
console.log(formatOrdinal(5613))
console.log(formatOrdinal(10253))
