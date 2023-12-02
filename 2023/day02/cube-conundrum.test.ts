import {input} from "./cube-conundrum.input";
import {parseGame, parseGamePart2} from "./cube-conundrum";

describe('Day 1, Part 1', () => {
    test('test', () => {
        let countOfIds = 0
        for (let i = 0; i < input.length; i++) {
            const result = parseGame(input[i])

            if (result) countOfIds += result
        }

        console.log(countOfIds)
    })
})

describe('Day 1, Part 2', () => {
    test('test', () => {
        let countOfIds = 0
        for (let i = 0; i < input.length; i++) {
            const result = parseGamePart2(input[i])

            if (result) countOfIds += result
        }

        console.log(countOfIds)
    })
})