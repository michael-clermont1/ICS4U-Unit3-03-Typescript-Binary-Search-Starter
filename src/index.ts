/**
 * This program generates 250 random numbers in an array
 * and allows the user to search the array for a number.
 *
 * By:      Michael Clermont
 * Version: 1.0
 * Since:   2022-9-24
 */

import promptSync from 'prompt-sync'

function binarySearch(userArray: number[],
    userNumber: number,
    lowIndex: number, highIndex: number): number {
  const mid = (lowIndex + highIndex) / 2
  if (userNumber === userArray[mid]) {
      return mid
  } else if (userNumber > userArray[mid]) {
    return binarySearch(userArray, userNumber, mid + 1, highIndex)
  } else {
    return binarySearch(userArray, userNumber, lowIndex, mid - 1)
  }
}

    function main() {
        console.log("Binary Search Program.")
        try {
            let randomNumberArray: number[] = new Array(250)
            for (let counter = 0; counter < randomNumberArray.length; counter++) {
                let randomNum: number
                do {
                    randomNum = Math.floor(Math.random() * 999)
                } while (randomNumberArray.includes(randomNum)) {
                    randomNumberArray[counter] = randomNum
                }
            }
            let numberArray: number[] = randomNumberArray
            numberArray.sort(function(a,b){return a - b})

            console.log('\nSorted list of numbers:\n')
            console.log(numberArray)
            console.log('\n\n')

            const prompt = promptSync()
            const userInput = prompt('What number are you searching for in the array: ')
            const userNumber = parseInt(userInput)
            if (userNumber > 999 || userNumber < 0) {
                throw new Error()
            } else {
                const searchResult = binarySearch(numberArray, userNumber, 0, numberArray.length)
                console.log('')
                console.log('Your number is in index: %d ', searchResult)
            }
        } catch (error) {
          console.log('')
          console.log('EROOR: Invalid Input')
        }
    }
main()
