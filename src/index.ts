/**
 * This program generates 250 random numbers in an array
 * and allows the user to search the array for a number.
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-9-24
 */

import promptSync from 'prompt-sync'

/**
 * The binarySearch() function.
 *
 * @param {number[]} userArray - randomized array
 * @param {number} userNumber - number from user
 * @param {number} lowIndex - low index
 * @param {number} highIndex - high index
 * @returns {number} - return value
 */
function binarySearch (userArray: number[],
  userNumber: number,
  lowIndex: number, highIndex: number): number {
  if (lowIndex > highIndex) {
    return -1
  }
  const mid = Math.floor((lowIndex + highIndex) / 2)
  if (userNumber < userArray[mid]) {
    return binarySearch(userArray, userNumber, lowIndex, highIndex - 1)
  } else if (userNumber > userArray[mid]) {
    return binarySearch(userArray, userNumber, lowIndex + 1, highIndex)
  } else {
    return mid
  }
}

/**
 * The main() function.
 *
 */
function main (): void {
  console.log('Binary Search Program.')
  const numberArray = Array.from({ length: 250 }, () => Math.floor(Math.random() * 1000))
  numberArray.sort((a, b) => a - b)

  console.log('\nSorted list of numbers:\n')
  console.log(numberArray + ', ')
  console.log('\n\n')

  const prompt = promptSync()
  const userNumber = Number(prompt('What number are you searching for in the array: '))
  if (userNumber > 999 || userNumber < 0) {
    console.log('ERROR')
  } else {
    const searchResult = binarySearch(numberArray, userNumber, 0, numberArray.length)
    console.log('')
    console.log('Your number is in index: %d ', searchResult)
  }
}
main()
