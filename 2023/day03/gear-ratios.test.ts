import {input} from "./gear-ratios.input";
import {
    checkForPartNumbersInVicinity,
    checkForSpecialCharInVicinity,
    findFirstNumber,
    findFirstStar, findFullNumber,
    getNumberAtCoords,
    removeFirstNumber, removeFirstStar
} from "./gear-ratios";

describe('Day 1, Part 1', () => {
    test('test', () => {
        console.log(findFirstNumber(["...","...","..."]))
    })
    test('test2', () => {
        console.log(checkForSpecialCharInVicinity(["123","456","789"], [[1,1]]))
    })
    test('test3', () => {
        console.log(removeFirstNumber(["123","456","789"], [[1,1]]))
    })
    test('test5', () => {
        console.log(getNumberAtCoords(["123","456","789"], [[1,1], [1,2]]))
    })
    test('test4', () => {
        let run = true;
        let inputString = input

        // let inputString = [
        //     "467..114..",
        //     "...*......",
        //     "..35..633.",
        //     "......#...",
        //     "617*......",
        //     ".....+.58.",
        //     "..592.....",
        //     "......755.",
        //     "...$.*....",
        //     ".664.598.."
        // ]

        let result = 0;

        while(run) {
            const coordinates = findFirstNumber(inputString)
            if (coordinates[0].length === 0) {
                run = false
                console.log('quiting')
                continue;
            }

            if (checkForSpecialCharInVicinity(inputString, coordinates)) {
                result += getNumberAtCoords(inputString, coordinates)
            }

            inputString = removeFirstNumber(inputString, coordinates)
        }

        console.log(result)
    })
})

describe('Day 1, Part 2', () => {
    test('test', () => {
        console.log(findFirstStar(["4.2",".*.","..."]))
    })

    test('test2', () => {
        console.log(checkForPartNumbersInVicinity(["2..",".*.","20."], [ 1, 1 ]))
    })

    test('test3', () => {
        console.log(findFullNumber(["2....",".*...","120.."], [ 2, 0 ]))
    })

    test('test4', () => {
        let run = true;
        let inputString = input

        // let inputString = [
        //     "467..114..",
        //     "...*......",
        //     "..35..633.",
        //     "......#...",
        //     "617*......",
        //     ".....+.58.",
        //     "..592.....",
        //     "......755.",
        //     "...$.*....",
        //     ".664.598.."
        // ]

        let result = 0;

        while(run) {
            const coordinates = findFirstStar(inputString)
            if (coordinates.length === 0) {
                run = false
                console.log('quiting')
                continue;
            }

            const partNumbersStarts = checkForPartNumbersInVicinity(inputString, coordinates)

            if(partNumbersStarts.length === 2) {
                const first = findFullNumber(inputString, partNumbersStarts[0])
                const second = findFullNumber(inputString, partNumbersStarts[1])
                result += first * second
            }

            inputString = removeFirstStar(inputString, coordinates)
        }

        console.log(result)
    })

})