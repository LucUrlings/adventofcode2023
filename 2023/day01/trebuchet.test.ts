import {
    calculateCalibrationValue, calculateCalibrationValuePart2,
    getFirstAndLastNumber,
    getFirstAndLastNumberPart2,
} from "./trebuchet";
import {input} from "./trebuchet.input";

describe('Day 1, Part 1', () => {
    test('First number should be 8', () => {
        // five8b 88
        expect(getFirstAndLastNumber(input[0])).toStrictEqual([8, expect.anything()])
    })
    test('First number should be 2', () => {
        // 2733vmmpknvgr 23
        expect(getFirstAndLastNumber(input[1])).toStrictEqual([2 , expect.anything()])
    })
    test('First number should be 3', () => {
        // 3oneeighttwo 33
        expect(getFirstAndLastNumber(input[2])).toStrictEqual([3 , expect.anything()])
    })

    test('First number should be 8 and last number should be 8', () => {
        // five8b 88
        expect(getFirstAndLastNumber(input[0])).toStrictEqual([8, 8])
    })
    test('First number should be 2 and last number should be 3', () => {
        // 2733vmmpknvgr 23
        expect(getFirstAndLastNumber(input[1])).toStrictEqual([2 , 3])
    })
    test('First number should be 3 and last number should be 3', () => {
        // 3oneeighttwo 33
        expect(getFirstAndLastNumber(input[2])).toStrictEqual([3 , 3])
    })

    test('Calculate calibration value first 3 inputs to equal 144', () => {
        expect(calculateCalibrationValue(input.slice(0, 3))).toEqual(144)
    })

    test('Calculate calibration value for entire input', () => {
        console.log(calculateCalibrationValue(input)) // 55029
    })
})

describe('Day 1, Part 2', () => {
    test('First number should be 8', () => {
        // five8b 88
        expect(getFirstAndLastNumberPart2(input[0])).toStrictEqual([8, expect.anything()])
    })
    test('First number should be 2', () => {
        // 2733vmmpknvgr 23
        expect(getFirstAndLastNumberPart2(input[1])).toStrictEqual([2 , expect.anything()])
    })
    test('First number should be 3', () => {
        // 3oneeighttwo 33
        expect(getFirstAndLastNumberPart2(input[2])).toStrictEqual([3 , expect.anything()])
    })

    test('First number should be 8 and last number should be 8', () => {
        // five8b 88
        expect(getFirstAndLastNumberPart2(input[0])).toStrictEqual([8, 8])
    })
    test('First number should be 2 and last number should be 3', () => {
        // 2733vmmpknvgr 23
        expect(getFirstAndLastNumberPart2(input[1])).toStrictEqual([2 , 3])
    })
    test('First number should be 3 and last number should be 3', () => {
        // 3oneeighttwo 32
        expect(getFirstAndLastNumberPart2(input[2])).toStrictEqual([3 , 2])
    })
    test('Firaaaaa', () => {
        // 3oneeighttwo 32
        expect(getFirstAndLastNumberPart2("3twone")).toStrictEqual([3 , 1])
    })

    test('Firaaaaa 2', () => {
        expect(getFirstAndLastNumberPart2("3twone")).toStrictEqual([3 , 1])
        expect(getFirstAndLastNumberPart2("two1nine")).toStrictEqual([2 , 9])
        expect(getFirstAndLastNumberPart2("eightwothree")).toStrictEqual([8 , 3])
        expect(getFirstAndLastNumberPart2("abcone2threexyz")).toStrictEqual([1 , 3])
        expect(getFirstAndLastNumberPart2("xtwone3four")).toStrictEqual([2 , 4])
        expect(getFirstAndLastNumberPart2("4nineeightseven2")).toStrictEqual([4 , 2])
        expect(getFirstAndLastNumberPart2("zoneight234")).toStrictEqual([1 , 4])
        expect(getFirstAndLastNumberPart2("7pqrstsixteen")).toStrictEqual([7 , 6])
    })
    test('Calculate calibration value with replaced numbers for entire input 2', () => {
        console.log(calculateCalibrationValuePart2(input)) // 55688
    })
})