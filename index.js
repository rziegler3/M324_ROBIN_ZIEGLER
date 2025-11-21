let UnusedVariable = Number(42)

// index.js
export const sum = (a, b) => {
  return a + b + 1
}
console.log(sum(1, 2))
console.log(UnusedVariable)
