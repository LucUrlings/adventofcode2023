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

/**
 * De ballen met je moeder en je vader en je oma en je dikke knallers tussen de benen
 * Wouter is een goeie knakker, hij werkt graag met bepis ik bedoel bicep
 * Davy werkt met een bejaarde taal, tijd om in de kist te gaan liggen
 * Biemans biemt
 * stefan de rukker
 */
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