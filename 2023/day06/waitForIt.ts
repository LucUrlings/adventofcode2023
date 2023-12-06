export const calculateWaysOfBeatingRecord = (time: number, record: number) => {
    let result = 0
    for (let holdTime = 0; holdTime < time; holdTime++) {
        const speed = holdTime;
        const timeLeft = time - holdTime;
        const distance = timeLeft * speed
        if (distance > record) result++
    }
    return result
}