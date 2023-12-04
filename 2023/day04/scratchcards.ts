// Part One
export const readCard = (inputCard: string) => {
    const gameWithoutCard = inputCard.split(": ")[1].replaceAll("  ", " ").split(' | ')
    const winningNumbers = gameWithoutCard[0].split(' ').map(number => parseInt(number))
    const myNumbers = gameWithoutCard[1].split(' ').map(number => parseInt(number))

    let winningNumberPoints = 0;
    winningNumbers.forEach(winner => {
        if (myNumbers.includes(winner)) {
            if (winningNumberPoints === 0) winningNumberPoints = 1;
            else winningNumberPoints = 2 * winningNumberPoints
        }
    })

    return winningNumberPoints
}

// Part Two
export const readCardPart2 = (inputCard: string) => {
    const game = inputCard.split(": ")
    const gameCard = parseInt(game[0].replace(/[a-zA-Z\s]+/, ''))

    const gameWithoutCard = game[1].replaceAll("  ", " ").split(' | ')
    const winningNumbers = gameWithoutCard[0].split(' ').map(number => parseInt(number))
    const myNumbers = gameWithoutCard[1].split(' ').map(number => parseInt(number))

    let winningNumberPoints = gameCard;
    const resultArray: number[] = []
    winningNumbers.forEach(winner => {
        if (myNumbers.includes(winner)) {
            winningNumberPoints += 1
            resultArray.push(winningNumberPoints)
        }
    })

    return resultArray
}

export const getGameCard = (input: string[], gameId: number): string => {
    return input[gameId - 1]
}