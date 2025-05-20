function analyzeArray(array) {
    const minValue = Math.min(...array);
    const maxValue = Math.max(...array);
    const avgValue = array.reduce((sum, value) => sum + value, 0) / array.length;
    const lengthValue = array.length;

    const obj = {
        average: avgValue,
        min: minValue,
        max: maxValue,
        length: lengthValue
    };

    return obj;
}

module.exports = analyzeArray;