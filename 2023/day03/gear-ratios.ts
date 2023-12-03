//Part 1
export const findFirstNumber = (input: string[]): number[][] => {
    const result: number[][] = []
    for (const rowIndex in input) {
        const rowSplit = input[rowIndex].split("")
        for (const itemIndex in rowSplit) {
            const char = rowSplit[itemIndex];

            if (/^\d+$/.test(char)) {
                result.push([parseInt(rowIndex), parseInt(itemIndex)])
            }

            if (!/^\d+$/.test(char) && result.length > 0) {
                return result
            }
        }
    }
    return [[]]
}

const setCharAt = (str: string, index: number, chr: string) => {
    if (index > str.length - 1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

export const getNumberAtCoords = (input: string[], arrayOfCoords: number[][]): number => {
    const result: string[] = []
    arrayOfCoords.forEach(coor => {
        result.push(input[coor[0]].split("")[coor[1]])
    })
    return parseInt(result.join(''))
}

export const removeFirstNumber = (input: string[], arrayOfCoords: number[][]): string[] => {
    const inputUpdated = input;

    arrayOfCoords.forEach(coordinate => {
        inputUpdated[coordinate[0]] = setCharAt(input[coordinate[0]], coordinate[1], ".")
    })

    return inputUpdated
}

export const checkForSpecialCharInVicinity = (inputString: string[], arrayOfCoords: number[][]): boolean => {
    const coordinatesToScan: number[][] = [];

    arrayOfCoords.forEach(coordinate => {
        const coordinatexminoneyminone = [coordinate[0] - 1, coordinate[1] - 1]
        if (coordinatexminoneyminone[0] >= 0 && coordinatexminoneyminone[1] >= 0) coordinatesToScan.push(coordinatexminoneyminone)

        const coordinatexminoneyzero = [coordinate[0] - 1, coordinate[1]]
        if (coordinatexminoneyzero[0] >= 0 && coordinatexminoneyzero[1] >= 0) coordinatesToScan.push(coordinatexminoneyzero)

        const coordinatexminoneyplusone = [coordinate[0] - 1, coordinate[1] + 1]
        if (coordinatexminoneyplusone[0] >= 0 && coordinatexminoneyplusone[1] < inputString[inputString.length - 1].length) coordinatesToScan.push(coordinatexminoneyplusone)

        const coordinatexzeroyminone = [coordinate[0], coordinate[1] - 1]
        if (coordinatexzeroyminone[0] >= 0 && coordinatexzeroyminone[1] >= 0) coordinatesToScan.push(coordinatexzeroyminone)

        const coordinatexmzeroplusone = [coordinate[0], coordinate[1] + 1]
        if (coordinatexmzeroplusone[0] >= 0 && coordinatexmzeroplusone[1] < inputString[inputString.length - 1].length) coordinatesToScan.push(coordinatexmzeroplusone)

        const coordinatexplusoneyminone = [coordinate[0] + 1, coordinate[1] - 1]
        if (coordinatexplusoneyminone[0] < inputString.length && coordinatexplusoneyminone[1] >= 0) coordinatesToScan.push(coordinatexplusoneyminone)

        const coordinatexplusoneyzero = [coordinate[0] + 1, coordinate[1]]
        if (coordinatexplusoneyzero[0] < inputString.length && coordinatexplusoneyzero[1] >= 0) coordinatesToScan.push(coordinatexplusoneyzero)

        const coordinatexplusoneyplusone = [coordinate[0] + 1, coordinate[1] + 1]
        if (coordinatexplusoneyplusone[0] < inputString.length && coordinatexplusoneyplusone[1] < inputString[inputString.length - 1].length) coordinatesToScan.push(coordinatexplusoneyplusone)
    })

    for (let coordinate of coordinatesToScan) {
        const character = inputString[coordinate[0]].split("")[coordinate[1]]

        if (!/^\d+$/.test(character) && character !== ".") {
            return true
        }
    }

    return false
}

// Part 2
export const findFirstStar = (input: string[]): number[] => {
    for (const rowIndex in input) {
        const rowSplit = input[rowIndex].split("")
        for (const itemIndex in rowSplit) {
            const char = rowSplit[itemIndex];

            if (char === "*")
                return [parseInt(rowIndex), parseInt(itemIndex)]
        }
    }

    return []
}

export const checkForPartNumbersInVicinity = (inputString: string[], coordinate: number[]) => {
    const numberBaseCoordinates: number[][] = [];

    const coordsLeftUp = [coordinate[0] - 1, coordinate[1] - 1]
    if (coordsLeftUp[0] >= 0 && coordsLeftUp[1] >= 0) {
        const character = inputString[coordsLeftUp[0]].split("")[coordsLeftUp[1]]
        if (/^\d+$/.test(character)) {
            numberBaseCoordinates.push(coordsLeftUp)
        }
    }

    const coordsMidUp = [coordinate[0] - 1, coordinate[1]]
    if (coordsMidUp[0] >= 0 && coordsMidUp[1] >= 0) {
        const character = inputString[coordsMidUp[0]].split("")[coordsMidUp[1]]
        if (/^\d+$/.test(character) && !numberBaseCoordinates.includes(coordsLeftUp)) {
            numberBaseCoordinates.push(coordsMidUp)
        }
    }

    const coordsRightUp = [coordinate[0] - 1, coordinate[1] + 1]
    if (coordsRightUp[0] >= 0 && coordsRightUp[1] < inputString[inputString.length - 1].length) {
        const character = inputString[coordsRightUp[0]].split("")[coordsRightUp[1]]
        if (/^\d+$/.test(character) && !numberBaseCoordinates.includes(coordsMidUp)) {
            const prevCharacter = inputString[coordsMidUp[0]].split("")[coordsMidUp[1]]
            if (!/^\d+$/.test(prevCharacter))
                numberBaseCoordinates.push(coordsRightUp)
        }
    }

    const coordsLeftMid = [coordinate[0], coordinate[1] - 1]
    if (coordsLeftMid[0] >= 0 && coordsLeftMid[1] >= 0) {
        const character = inputString[coordsLeftMid[0]].split("")[coordsLeftMid[1]]
        if (/^\d+$/.test(character)) {
            numberBaseCoordinates.push(coordsLeftMid)
        }
    }

    const coordsRightMid = [coordinate[0], coordinate[1] + 1]
    if (coordsRightMid[0] >= 0 && coordsRightMid[1] < inputString[inputString.length - 1].length) {
        const character = inputString[coordsRightMid[0]].split("")[coordsRightMid[1]]
        if (/^\d+$/.test(character)) {
            numberBaseCoordinates.push(coordsRightMid)
        }
    }

    const coordsLeftDown = [coordinate[0] + 1, coordinate[1] - 1]
    if (coordsLeftDown[0] < inputString.length && coordsLeftDown[1] >= 0) {
        const character = inputString[coordsLeftDown[0]].split("")[coordsLeftDown[1]]
        if (/^\d+$/.test(character)) {
            numberBaseCoordinates.push(coordsLeftDown)
        }
    }

    const coordsMidDown = [coordinate[0] + 1, coordinate[1]]
    if (coordsMidDown[0] < inputString.length && coordsMidDown[1] >= 0) {
        const character = inputString[coordsMidDown[0]].split("")[coordsMidDown[1]]
        if (/^\d+$/.test(character) && !numberBaseCoordinates.includes(coordsLeftDown)) {
            numberBaseCoordinates.push(coordsMidDown)
        }
    }

    const coordsRightDown = [coordinate[0] + 1, coordinate[1] + 1]
    if (coordsRightDown[0] < inputString.length && coordsRightDown[1] < inputString[inputString.length - 1].length) {
        const character = inputString[coordsRightDown[0]].split("")[coordsRightDown[1]]
        if (/^\d+$/.test(character) && !numberBaseCoordinates.includes(coordsMidDown)) {
            const prevCharacter = inputString[coordsMidDown[0]].split("")[coordsMidDown[1]]
            if (!/^\d+$/.test(prevCharacter))
                numberBaseCoordinates.push(coordsRightDown)
        }
    }
    return numberBaseCoordinates
}

export const findFullNumber = (input: string[], coordinate: number[]): number => {
    const result: string[] = []

    for (let i = 0; i < 3; i++) {
        if (/^\d+$/.test(input[coordinate[0]].split("")[coordinate[1] - i]))
            result.push(input[coordinate[0]].split("")[coordinate[1] - i])
        else break;
    }

    result.reverse()

    for (let i = 1; i < 3; i++) {
        if (/^\d+$/.test(input[coordinate[0]].split("")[coordinate[1] + i]))
            result.push(input[coordinate[0]].split("")[coordinate[1] + i])
        else break;
    }

    return parseInt(result.join(''))
}

export const removeFirstStar = (input: string[], coordinate: number[]): string[] => {
    const inputUpdated = input;

    inputUpdated[coordinate[0]] = setCharAt(input[coordinate[0]], coordinate[1], ".")

    return inputUpdated
}