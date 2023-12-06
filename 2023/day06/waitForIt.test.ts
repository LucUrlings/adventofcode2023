import {calculateWaysOfBeatingRecord} from "./waitForIt";
import {input} from "./waitForIt.input";

describe('Day 1, Part 1', () => {
    test('calculateDistanceForTime', () => {
        console.log(calculateWaysOfBeatingRecord(7, 9))
    })

    test('test input data', () => {
        const testInput = [
            {
                time: 7,
                distance: 9
            },
            {
                time: 15,
                distance: 40
            },
            {
                time: 30,
                distance: 200
            },
        ]
        const results: number[] = []
        testInput.forEach(race => {
            results.push(calculateWaysOfBeatingRecord(race.time, race.distance))
        })

        console.log(results)

        console.log('result: ', results.reduce((prev, curr) => prev * curr, 1))
    })


    test('real input data', () => {
        const results: number[] = []
        input.forEach(race => {
            results.push(calculateWaysOfBeatingRecord(race.time, race.distance))
        })

        console.log('result: ', results.reduce((prev, curr) => prev * curr, 1))
    })

    test('real input data - part 2', () => {
        const time = parseInt(input.map(race => race.time.toString()).join(''))
        const distance = parseInt(input.map(race => race.distance.toString()).join(''))
        console.log('result: ', calculateWaysOfBeatingRecord(time, distance))
    })

})