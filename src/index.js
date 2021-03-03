// You should implement your task here.

module.exports = function towelSort(matrix) {

    let result = [];
    let index = 0;

    if (!matrix) {
        return [];
    }

    for (let i = 0; i < matrix.length; i++) {
        if (index % 2 == 0) {
            for (let q = 0; q < matrix[i].length; q++) {
                result.push(matrix[i][q]);
            }
            index += 1;
        } else {
            for (let q = matrix[i].length - 1; q >= 0; q--) {
                result.push(matrix[i][q]);
            }
            index += 1;
        }
    }

    return result;
};
