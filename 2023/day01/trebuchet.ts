export const getFirstAndLastNumber = (singleInput: string): [number, number] => {
    const numberString = singleInput.replace(/\D+/g, '')
    const first: number = parseInt(numberString[0], 10)
    const last: number = parseInt(numberString[numberString.length - 1], 10)
    return [first, last]
}

export const calculateCalibrationValue = (input: string[]): number => {
    const results = input.map(item => {
        const firstAndLast = getFirstAndLastNumber(item)
        return parseInt(`${firstAndLast[0]}${firstAndLast[1]}`)
    })

    return results.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}

export const getFirstAndLastNumberPart2 = (singleInput: string): [number, number]  => {
    const wordMap: Record<string, string> = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9',
    };

    let tempFirst = ""

    let first: number = NaN

    for (let i = 0; i < singleInput.length; i++) {
        tempFirst = `${tempFirst.length > 0 ? tempFirst : ''}${singleInput[i]}`

        if(/\d/.test(tempFirst)) {
            first = parseInt(tempFirst.replace(/\D+/g, ''));
            break;
        }

        else if (Object.keys(wordMap).some((word) => tempFirst.includes(word))) {
            first = parseInt(wordMap[Object.keys(wordMap).filter((word) => tempFirst.includes(word))[0]])
            break;
        }
    }

    let tempLast = ""

    let last: number = NaN

    for (let i = singleInput.length - 1; i >= 0; i--) {
        tempLast = `${singleInput[i]}${tempLast.length > 0 ? tempLast : ''}`

        if(/\d/.test(tempLast)) {
            last = parseInt(tempLast.replace(/\D+/g, ''));
            break;
        }

        else if (Object.keys(wordMap).some((word) => tempLast.includes(word))) {
            last = parseInt(wordMap[Object.keys(wordMap).filter((word) => tempLast.includes(word))[0]])
            break;
        }
    }

    return [first, last]
}

export const calculateCalibrationValuePart2 = (input: string[]): number => {
    const results = input.map(item => {
        const firstAndLast = getFirstAndLastNumberPart2(item)
        return parseInt(`${firstAndLast[0]}${firstAndLast[1]}`)
    })

    return results.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
}


