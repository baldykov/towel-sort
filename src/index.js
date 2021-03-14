// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return matrix.reduce((acc, row, index) => {
        if (!acc) return row;
        const value = (index % 2 === 0) ? row : row.reverse();
        return [...acc, ...value];
    }, []);
};
