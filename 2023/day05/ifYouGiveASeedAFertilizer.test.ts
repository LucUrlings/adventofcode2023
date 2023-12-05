import {buildInputSeedRanges, buildMappingFromTable, convertSeedToLocation} from "./ifYouGiveASeedAFertilizer";
import {input} from "./ifYouGiveASeedAFertilizer.input";

describe('Day 1, Part 1', () => {
    const testInput = {
        seeds: [79, 14, 55, 13],
        seedToSoil: [
            [50, 98, 2],
            [52, 50, 48]
        ],
        soilToFertilizer: [
            [0, 15, 37],
            [37, 52, 2],
            [39, 0, 15]
        ],
        fertilizerToWater: [
            [49, 53, 8],
            [0, 11, 42],
            [42, 0, 7],
            [57, 7, 4]
        ],
        waterToLight: [
            [88, 18, 7],
            [18, 25, 70]
        ],
        lightToTemperature: [
            [45, 77, 23],
            [81, 45, 19],
            [68, 64, 13]
        ],
        temperatureToHumidity: [
            [0, 69, 1],
            [1, 0, 69]
        ],
        humidityToLocation: [
            [60, 56, 37],
            [56, 93, 4]
        ]
    }
    test('test input', () => {
        const testI = testInput
        const seedToSoilMap = buildMappingFromTable(testI.seedToSoil);
        const soilToFertilizerMap = buildMappingFromTable(testI.soilToFertilizer);
        const fertilizerToWaterMap = buildMappingFromTable(testI.fertilizerToWater);
        const waterToLightMap = buildMappingFromTable(testI.waterToLight);
        const lightToTemperatureMap = buildMappingFromTable(testI.lightToTemperature);
        const temperatureToHumidityMap = buildMappingFromTable(testI.temperatureToHumidity);
        const humidityToLocationMap = buildMappingFromTable(testI.humidityToLocation);

        let lowestLocation = 0
        testI.seeds.forEach(seed => {

            const location = convertSeedToLocation(seed, seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap)
            if (lowestLocation === 0 || location < lowestLocation) lowestLocation = location;
        })

        console.log('lowestLocation:', lowestLocation)
    })

    test('real input', () => {
        const testI = input
        const seedToSoilMap = buildMappingFromTable(testI.seedToSoil);
        const soilToFertilizerMap = buildMappingFromTable(testI.soilToFertilizer);
        const fertilizerToWaterMap = buildMappingFromTable(testI.fertilizerToWater);
        const waterToLightMap = buildMappingFromTable(testI.waterToLight);
        const lightToTemperatureMap = buildMappingFromTable(testI.lightToTemperature);
        const temperatureToHumidityMap = buildMappingFromTable(testI.temperatureToHumidity);
        const humidityToLocationMap = buildMappingFromTable(testI.humidityToLocation);

        let lowestLocation = 0
        testI.seeds.forEach(seed => {

            const location = convertSeedToLocation(seed, seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap)
            if (lowestLocation === 0 || location < lowestLocation) lowestLocation = location;
        })

        console.log('lowestLocation:', lowestLocation)
    })

    test('test input part 2', () => {
        const testI = testInput
        const seedToSoilMap = buildMappingFromTable(testI.seedToSoil);
        const soilToFertilizerMap = buildMappingFromTable(testI.soilToFertilizer);
        const fertilizerToWaterMap = buildMappingFromTable(testI.fertilizerToWater);
        const waterToLightMap = buildMappingFromTable(testI.waterToLight);
        const lightToTemperatureMap = buildMappingFromTable(testI.lightToTemperature);
        const temperatureToHumidityMap = buildMappingFromTable(testI.temperatureToHumidity);
        const humidityToLocationMap = buildMappingFromTable(testI.humidityToLocation);

        const ranges = buildInputSeedRanges(testI.seeds);

        let lowestLocation = 0

        const start = Date.now()
        ranges.forEach((range, index) => {
            console.log(`Working on: ${index} / ${ranges.length}`)
            for (let seed = range.start; seed < range.end; seed++) {
                const location = convertSeedToLocation(seed, seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap)
                if (lowestLocation === 0 || location < lowestLocation) lowestLocation = location;
            }
        })

        const stop = Date.now()

        console.log('lowestLocation:', lowestLocation, 'Calculation time: ', stop - start)
    })

    test('real input part 2', () => {
        const testI = input
        const seedToSoilMap = buildMappingFromTable(testI.seedToSoil);
        const soilToFertilizerMap = buildMappingFromTable(testI.soilToFertilizer);
        const fertilizerToWaterMap = buildMappingFromTable(testI.fertilizerToWater);
        const waterToLightMap = buildMappingFromTable(testI.waterToLight);
        const lightToTemperatureMap = buildMappingFromTable(testI.lightToTemperature);
        const temperatureToHumidityMap = buildMappingFromTable(testI.temperatureToHumidity);
        const humidityToLocationMap = buildMappingFromTable(testI.humidityToLocation);

        const ranges = buildInputSeedRanges(testI.seeds);

        let lowestLocation = 0

        const start = Date.now()
        ranges.forEach((range, index) => {
            console.log(`Working on: ${index} / ${ranges.length}, time expired: ${(Date.now() - start) / 1000}`)
            for (let seed = range.start; seed < range.end; seed++) {
                const location = convertSeedToLocation(seed, seedToSoilMap, soilToFertilizerMap, fertilizerToWaterMap, waterToLightMap, lightToTemperatureMap, temperatureToHumidityMap, humidityToLocationMap)
                if (lowestLocation === 0 || location < lowestLocation) lowestLocation = location;
            }
        })

        const stop = Date.now()

        console.log('lowestLocation:', lowestLocation, 'Calculation time: ', (stop - start) / 1000)
    })
})