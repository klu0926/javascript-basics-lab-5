import { toUpperCase } from "./stringModule.js"


// arrayModule.js
export function findMax(arr) {
  return Math.max(...arr)
}
export function reverseArray(arr) {
  return arr.reverse()
}


// array + string
export function findMaxAndUpperCase(array) {
  const value = 10
  let max = findMax(array)
  max *= value
  return toUpperCase(max.toString())
}


