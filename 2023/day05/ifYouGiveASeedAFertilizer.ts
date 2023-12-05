export type conversionTableMapping = {
    sourceStart: number,
    sourceEnd: number
    destinationStart: number,
    // destinationEnd: number
}[]

export const buildMappingFromTable = (table: number[][]): conversionTableMapping => {
    const numberMapping: conversionTableMapping = []

    table.forEach(row => {
        numberMapping.push({
            sourceStart: row[1],
            sourceEnd: row[1] + row[2],
            destinationStart: row[0],
            // destinationEnd: row[0] + row[2],
        })
    })

    return numberMapping
}

export const convertSeedToLocation = (seed: number, seedToSoilMap: conversionTableMapping, soilToFertilizerMap: conversionTableMapping, fertilizerToWaterMap: conversionTableMapping, waterToLightMap: conversionTableMapping, lightToTemperatureMap: conversionTableMapping, temperatureToHumidityMap: conversionTableMapping, humidityToLocationMap: conversionTableMapping) => {
    const soil = getDestinationForSource(seed, seedToSoilMap)
    const fertilizer = getDestinationForSource(soil, soilToFertilizerMap)
    const water = getDestinationForSource(fertilizer, fertilizerToWaterMap)
    const light = getDestinationForSource(water, waterToLightMap)
    const temperature = getDestinationForSource(light, lightToTemperatureMap)
    const humidity = getDestinationForSource(temperature, temperatureToHumidityMap)
    const location = getDestinationForSource(humidity, humidityToLocationMap)

    return location;
}

const getDestinationForSource = (source: number, table: conversionTableMapping) => {
    const mapping = table.find(map=> map.sourceStart <= source && map.sourceEnd >= source);
    if (!mapping) return source;
    const offset = source - mapping.sourceStart;

    return mapping.destinationStart + offset
}

export const buildInputSeedRanges = (seeds: number[]) => {
    const ranges: {start: number, end: number}[] = []
    for (let i = 0; i < seeds.length; i++) {
        const start = seeds[i];
        const length = seeds[i + 1]
        ranges.push({start, end: start + length})

        i++
    }
    return ranges
}