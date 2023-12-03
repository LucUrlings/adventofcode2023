const MAX_RED_CUBES = 12;
const MAX_GREEN_CUBES = 13;
const MAX_BLUE_CUBES = 14;

export const parseGame = (game: string): number | false => {
    const gameSplit = game.split(':')
    const gameId: number = parseInt(gameSplit[0].replace(/\D+/g, ''))

    const cubes = gameSplit[1].trim().split(/,|;/).map(item => item.trim())

    for (const cubesByColor of cubes) {
        const amountOfCubes = parseInt(cubesByColor.split(' ')[0])
        if (cubesByColor.includes('red') && amountOfCubes > MAX_RED_CUBES) return false;
        else if (cubesByColor.includes('blue') && amountOfCubes > MAX_BLUE_CUBES) return false;
        else if (cubesByColor.includes('green') && amountOfCubes > MAX_GREEN_CUBES) return false;
    }

    return gameId
}

export const parseGamePart2 = (game: string): number | false => {
    const gameSplit = game.split(':')

    const cubes = gameSplit[1].trim().split(/,|;/).map(item => item.trim())

    let maxRed = 0;
    let maxBlue = 0;
    let maxGreen = 0;

    for (const cubesByColor of cubes) {
        const amountOfCubes = parseInt(cubesByColor.split(' ')[0])
        if (cubesByColor.includes('red') && maxRed < amountOfCubes) maxRed = amountOfCubes;
        else if (cubesByColor.includes('blue') && maxBlue < amountOfCubes) maxBlue = amountOfCubes;
        else if (cubesByColor.includes('green') && maxGreen < amountOfCubes) maxGreen = amountOfCubes;
    }

    return maxRed * maxBlue * maxGreen
}